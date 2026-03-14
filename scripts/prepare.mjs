import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const repoRoot = process.cwd();
const gitDir = path.join(repoRoot, '.git');

if (process.env.HUSKY === '0' || process.env.CI) {
  process.exit(0);
}

if (!fileExists(gitDir)) {
  process.exit(0);
}

const huskyBin = process.platform === 'win32'
  ? path.join(repoRoot, 'node_modules', '.bin', 'husky.cmd')
  : path.join(repoRoot, 'node_modules', '.bin', 'husky');

if (!fileExists(huskyBin)) {
  process.exit(0);
}

const result = spawnSync(huskyBin, ['install'], { stdio: 'inherit' });
process.exit(result.status ?? 1);

