import type { RequestHandler } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik';

export const onRequest: RequestHandler = (event) => {
  if (isDev) return;

  const nonce = Date.now().toString(36);
  event.sharedMap.set('@nonce', nonce);

  const csp = [
    "default-src 'self'",
    `script-src 'self' https://mc.yandex.ru https://mc.yandex.com https://yastatic.net 'nonce-${nonce}' 'strict-dynamic'`,
    "connect-src 'self' https://mc.yandex.ru https://mc.yandex.com https://yandex.ru",
    "img-src 'self' data: https://mc.yandex.ru https://mc.yandex.com",
    'frame-src https://yandex.ru https://yandex.ru/maps-reviews-widget https://*.yandex.ru',
    "object-src 'none'",
    "base-uri 'self'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
  ].join('; ');

  event.headers.set('Content-Security-Policy', csp);
  event.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  event.headers.set('X-Frame-Options', 'SAMEORIGIN');
  event.headers.set('X-Content-Type-Options', 'nosniff');
};
