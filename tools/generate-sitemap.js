const fs = require('fs');
const path = require('path');

const base = 'https://www.athath-jeddah-sa.com';
const routesFile = path.join(process.cwd(), 'public', 'routes.json');
let pages = ['/'];

if (fs.existsSync(routesFile)) {
  try {
    const raw = fs.readFileSync(routesFile, 'utf8');
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) pages = arr;
  } catch (e) {
    console.error('Failed to read public/routes.json', e);
  }
}

const urls = pages.map(p => `\n  <url>\n    <loc>${base}${p}</loc>\n    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('sitemap written to public/sitemap.xml');