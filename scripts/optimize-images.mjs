/**
 * Image pipeline for /public. Run with `npm run images` after adding or replacing photos.
 *
 * Default (read-only on /public): writes tiny blurred previews to
 * src/lib/image-placeholders.json, which SiteImage uses to show a soft preview instantly
 * while the full image loads.
 *
 * Optional `--shrink` (rewrites files): shrinks oversized JPEG photos in place (max 2560px on the long edge, quality 82,
 *    EXIF rotation applied, metadata such as GPS stripped). Filenames stay the same,
 *    so no code changes are needed. Files that are already small enough are left alone.
 *    Originals stay recoverable from git history. Only run this deliberately.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = 'public';
const PLACEHOLDER_FILE = 'src/lib/image-placeholders.json';
const MAX_EDGE = 2560;
const MAX_BYTES = 900_000;
const JPEG_QUALITY = 82;
const SHRINK = process.argv.includes('--shrink');

function listImages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listImages(fullPath);
    return /\.(jpe?g|png|webp)$/i.test(entry.name) ? [fullPath] : [];
  });
}

async function shrinkIfNeeded(file) {
  if (!/\.jpe?g$/i.test(file)) return null;

  const before = fs.statSync(file).size;
  const meta = await sharp(file, { failOn: 'none' }).metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const rotated = (meta.orientation ?? 1) > 1;

  if (longEdge <= MAX_EDGE && before <= MAX_BYTES && !rotated) return null;

  const output = await sharp(file, { failOn: 'none' })
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();

  if (output.length >= before && !rotated) return null;

  fs.writeFileSync(file, output);
  return { before, after: output.length };
}

async function blurPlaceholder(file) {
  const buffer = await sharp(file, { failOn: 'none' })
    .rotate()
    .resize(16, 16, { fit: 'inside' })
    .flatten({ background: '#F7F4EC' })
    .jpeg({ quality: 50 })
    .toBuffer();
  return `data:image/jpeg;base64,${buffer.toString('base64')}`;
}

const files = listImages(PUBLIC_DIR).sort();
const placeholders = {};
let savedBytes = 0;

for (const file of files) {
  const result = SHRINK ? await shrinkIfNeeded(file) : null;
  if (result) {
    savedBytes += result.before - result.after;
    console.log(`shrunk  ${file}  ${(result.before / 1e6).toFixed(2)}MB -> ${(result.after / 1e6).toFixed(2)}MB`);
  }

  const publicPath = '/' + path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
  placeholders[publicPath] = await blurPlaceholder(file);
}

fs.writeFileSync(PLACEHOLDER_FILE, JSON.stringify(placeholders, null, 2) + '\n');
console.log(`\n${files.length} images processed, ${(savedBytes / 1e6).toFixed(1)}MB saved, placeholders -> ${PLACEHOLDER_FILE}`);
