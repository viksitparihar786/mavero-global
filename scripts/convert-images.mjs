/**
 * Converts all JPG/PNG source images in /assets to WebP.
 * Run once: node scripts/convert-images.mjs
 * Requires: npm install sharp --save-dev
 *
 * Next.js Image already serves WebP/AVIF at runtime, but converting the
 * source files reduces build-time processing overhead and file sizes.
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '..', 'assets');

function getAllImages(dir) {
  const results = [];
  for (const item of readdirSync(dir)) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      results.push(...getAllImages(fullPath));
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(item).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

const images = getAllImages(assetsDir);
console.log(`Found ${images.length} images to convert...`);

for (const imgPath of images) {
  const ext = extname(imgPath).toLowerCase();
  const webpPath = imgPath.replace(ext, '.webp');

  try {
    await sharp(imgPath)
      .resize({
        width: 1920,
        height: 1080,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    console.log(`✓  ${basename(imgPath)} → ${basename(webpPath)}`);
  } catch (err) {
    console.error(`✗  ${basename(imgPath)}:`, err.message);
  }
}

console.log('\nDone. Update @/assets imports in components to use .webp extensions.');
