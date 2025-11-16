const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(process.cwd(), 'public', 'images', 'src');
const outDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(srcDir)) {
  console.error('ضع صور المصدر في public/images/src/');
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const files = fs.readdirSync(srcDir).filter(f => \/\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const name = path.parse(file).name;
    const input = path.join(srcDir, file);
    const outWebp = path.join(outDir, `${name}.webp`);
    const outAvif = path.join(outDir, `${name}.avif`);
    await sharp(input).resize(1200).webp({quality:75}).toFile(outWebp);
    await sharp(input).resize(1200).avif({quality:50}).toFile(outAvif);
    console.log('optimized:', file);
  }
})();