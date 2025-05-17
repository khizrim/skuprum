import { component$, useServerData } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from '~/components/router-head/router-head';
import { isDev } from '@builder.io/qwik';

import './global.css';

export default component$(() => {
  const nonce = useServerData<string | undefined>('nonce');

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />
      </head>
      <body lang="ru" class="flex flex-col min-h-screen">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister nonce={nonce} />}
      </body>
    </QwikCityProvider>
  );
});
