import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ headers, send }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://skuprum.ru/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  headers.set('Content-Type', 'application/xml');
  send(200, sitemap);
};
