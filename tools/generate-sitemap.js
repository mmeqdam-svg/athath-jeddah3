import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// محاكاة __dirname و __filename في ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = 'https://www.athath-jeddah-sa.com';

// تحديد مسار ملف routes.json
const routesFile = path.join(process.cwd(), 'public', 'routes.json');

let pages = ['/'];

try {
  // التحقق من وجود الملف
  const exists = await fs.stat(routesFile).then(() => true).catch(() => false);

  if (exists) {
    const raw = await fs.readFile(routesFile, 'utf8');
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) pages = arr;
  }
} catch (e) {
  console.error('Failed to read public/routes.json', e);
}

// إنشاء عناصر الـ URL داخل ملف sitemap
const urls = pages
  .map(
    p => `
  <url>
    <loc>${base}${p}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('');

// قالب الـ sitemap كامل
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

// حفظ الملف في public/sitemap.xml
const outDir = path.join(process.cwd(), 'public');

// إنشاء المجلد لو غير موجود
await fs.mkdir(outDir, { recursive: true });

// كتابة الملف
await fs.writeFile(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');

console.log('sitemap written to public/sitemap.xml');
