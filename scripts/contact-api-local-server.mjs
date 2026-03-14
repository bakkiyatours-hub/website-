import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { URL } from 'node:url';

const SUBJECTS = ['General Inquiry', 'Tour Booking', 'Custom Tour'];

function loadDotEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
  return true;
}

const repoRoot = process.cwd();
loadDotEnvFile(path.join(repoRoot, 'contact-api', '.env.local'));
loadDotEnvFile(path.join(repoRoot, '.env.local'));

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function corsHeaders(origin) {
  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!origin) {
    return {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
      'access-control-max-age': '86400',
    };
  }

  if (allowed.length === 0 || allowed.includes(origin)) {
    return {
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
      'access-control-max-age': '86400',
      vary: 'origin',
    };
  }

  return null;
}

function readJson(req, limitBytes = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let bytes = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      bytes += chunk.length;
      if (bytes > limitBytes) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const text = Buffer.concat(chunks).toString('utf8');
        resolve(text ? JSON.parse(text) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, obj, headers = {}) {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    ...headers,
  });
  res.end(JSON.stringify(obj));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('OK');
    return;
  }

  if (url.pathname !== '/api/contact') {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  const origin = req.headers.origin || null;
  const cors = corsHeaders(origin);
  if (origin && cors === null) {
    sendJson(res, 403, { error: 'Origin not allowed.' });
    return;
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors || {});
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { ...(cors || {}), 'content-type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  const adminEmail = process.env.BREVO_ADMIN_EMAIL;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Website';

  if (!apiKey || !adminEmail || !senderEmail) {
    sendJson(res, 500, { error: 'Server is not configured.' }, cors || {});
    return;
  }

  let body;
  try {
    body = await readJson(req);
  } catch (err) {
    sendJson(
      res,
      400,
      { error: err instanceof Error ? err.message : 'Invalid request.' },
      cors || {},
    );
    return;
  }

  const fullName = String(body.fullName ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const phone = String(body.phone ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();
  const website = String(body.website ?? '').trim();

  if (website) {
    sendJson(res, 200, { ok: true }, cors || {});
    return;
  }

  if (!fullName || fullName.length > 120) {
    sendJson(res, 400, { error: 'Full name is required.' }, cors || {});
    return;
  }
  if (!isValidEmail(email) || email.length > 200) {
    sendJson(res, 400, { error: 'Valid email is required.' }, cors || {});
    return;
  }
  if (!phone || phone.length > 40) {
    sendJson(res, 400, { error: 'Phone number is required.' }, cors || {});
    return;
  }
  if (!SUBJECTS.includes(subject)) {
    sendJson(res, 400, { error: 'Invalid subject.' }, cors || {});
    return;
  }
  if (!message || message.length > 5000) {
    sendJson(res, 400, { error: 'Message is required.' }, cors || {});
    return;
  }

  const brevoHeaders = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': apiKey,
  };

  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: brevoHeaders,
    body: JSON.stringify({
      email,
      updateEnabled: true,
      listIds: [3],
      attributes: { FULLNAME: fullName, PHONE: phone, SUBJECT: subject, MESSAGE: message },
    }),
  });

  if (!contactRes.ok) {
    const details = await contactRes.text().catch(() => '');
    sendJson(res, 502, { error: 'Failed to save contact in Brevo.', details }, cors || {});
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h2>New Website Enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><b>Full Name</b></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><b>Subject</b></td><td>${escapeHtml(subject)}</td></tr>
        <tr><td style="vertical-align: top;"><b>Message</b></td><td>${escapeHtml(message).replaceAll('\n', '<br/>')}</td></tr>
      </table>
    </div>
  `;

  const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: brevoHeaders,
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: adminEmail }],
      subject: 'New Website Enquiry',
      htmlContent: html,
      replyTo: { email, name: fullName },
    }),
  });

  if (!emailRes.ok) {
    const details = await emailRes.text().catch(() => '');
    sendJson(res, 502, { error: 'Saved contact, but failed to send admin email.', details }, cors || {});
    return;
  }

  sendJson(res, 200, { ok: true }, cors || {});
});

const port = Number(process.env.PORT || 3000);
server.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
