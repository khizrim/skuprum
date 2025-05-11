import type { RequestHandler } from '@builder.io/qwik-city';
import { routes } from '@qwik-city-plan';
import { createSitemap } from './create-sitemap';

export const onGet: RequestHandler = (ev) => {
  const siteRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route !== '/' && route !== '404.html' && route !== 'sitemap.xml');

  const sitemap = createSitemap([
    { loc: '/', priority: 1 },
    ...siteRoutes.map((route) => ({
      loc: route,
      priority: 0.9,
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });

  ev.send(response);
};
