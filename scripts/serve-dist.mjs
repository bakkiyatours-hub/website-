import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '..', 'dist');

function getArg(name, fallback) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  const val = process.argv[idx + 1];
  if (!val || val.startsWith('--')) return fallback;
  return val;
}

const host = getArg('host', '127.0.0.1');
const port = Number(getArg('port', '5502'));

if (!existsSync(distDir) || !statSync(distDir).isDirectory()) {
  console.error(`Missing build output folder: ${distDir}`);
  console.error('Expected `dist/` to exist. If you can run builds, run `npm run build` first.');
  process.exit(1);
}

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.mjs', 'application/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.map', 'application/json; charset=utf-8'],
  ['.woff2', 'font/woff2'],
  ['.woff', 'font/woff'],
  ['.ttf', 'font/ttf'],
]);

function safeJoin(base, requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const normalized = path.posix.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const fullPath = path.resolve(base, normalized.slice(1));
  if (!fullPath.startsWith(base)) return null;
  return fullPath;
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
    const pathname = url.pathname || '/';

    // Prefer static assets; otherwise serve SPA entry.
    let filePath = safeJoin(distDir, pathname);
    if (!filePath) {
      res.writeHead(400, {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Served-By': 'serve-dist.mjs',
      });
      res.end('Bad request');
      return;
    }

    const hasExt = path.extname(filePath) !== '';
    if (pathname.endsWith('/')) filePath = path.join(filePath, 'index.html');

    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      if (!hasExt) {
        filePath = path.join(distDir, 'index.html');
      } else {
        res.writeHead(404, {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Served-By': 'serve-dist.mjs',
        });
        res.end('Not found');
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes.get(ext) ?? 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
      'X-Served-By': 'serve-dist.mjs',
    });
    createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Served-By': 'serve-dist.mjs',
    });
    res.end('Internal server error');
    console.error(err);
  }
});

server.listen(port, host, () => {
  const lanIps = Object.values(os.networkInterfaces())
    .flatMap((list) => list ?? [])
    .filter((addr) => addr.family === 'IPv4' && !addr.internal)
    .map((addr) => addr.address);

  console.log(`Serving ${distDir}`);
  console.log(`Local:   http://127.0.0.1:${port}/`);
  if (host === '0.0.0.0' || host === '::') {
    if (lanIps.length) {
      for (const ip of lanIps) console.log(`Network: http://${ip}:${port}/`);
    } else {
      console.log(`Network: http://<your-ip>:${port}/`);
    }
  } else {
    console.log(`Network: http://${host}:${port}/`);
  }
});
