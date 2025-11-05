import fs from 'fs';
import path from 'path';
import { generateRssFeed } from '../lib/rss';
import { getAllPostSlugs } from '../lib/posts';

// Generate RSS feed
const rss = generateRssFeed();
const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
fs.writeFileSync(rssPath, rss);
console.log('RSS feed generated at public/rss.xml');

// Generate Sitemap
const baseUrl = 'https://kqlll.github.io';
const posts = getAllPostSlugs();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/tags</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  ${posts
    .map(
      (slug) => `  <url>
    <loc>${baseUrl}/posts/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated at public/sitemap.xml');
