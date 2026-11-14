// Copies the static site from ./packet-hunt into ./dist, ready for GitHub Pages.
import { cp, rm, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'packet-hunt');
const out = path.join(root, 'dist');

try {
  await access(path.join(src, 'index.html'));
} catch {
  console.error(`Missing ${path.join(src, 'index.html')}`);
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(src, out, { recursive: true, filter: (p) => path.basename(p) !== 'README.md' });

console.log(`Built site to ${out}`);
