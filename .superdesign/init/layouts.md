# Layouts

### `src/root.tsx`
```tsx
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
```

### `src/routes/layout.tsx`
```tsx
import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Main } from '~/components/Main';
import { Footer } from '~/components/Footer';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Header />
      <Main>
        <Slot />
      </Main>
      <Footer />
    </>
  );
});
```

### `src/components/Header/Header.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';
import { Logo } from '~/components/Logo';
import { Contacts } from '~/components/Contacts';
export const Header = component$(() => {
  return (
    <Level
      as="header"
      class="sm:flex-row sm:items-center sm:justify-between px-4 py-4 sm:px-6 lg:px-12 w-full max-w-6xl mx-auto text-left justify-center items-start"
    >
      <Logo />
      <Contacts />
    </Level>
  );
});
```

### `src/components/Main/Main.tsx`
```tsx
import { component$, Slot } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Main = component$(() => {
  return (
    <Level
      as="main"
      class="grow gap-16 sm:gap-32 px-8 sm:py-8 mb-24 sm:px-8 lg:px-12 max-w-6xl w-full mx-auto justify-start"
    >
      <Slot />
    </Level>
  );
});
```

### `src/components/Footer/Footer.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import { Logo } from '~/components/Logo';
import { Address } from '~/components/Address';
import { Phone } from '~/components/Phone';
import { Email } from '~/components/Email';

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const addresses = [
    {
      text: 'г. Москва, ул. Смольная д. 2',
      mapUrl: 'https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto',
    },
    {
      text: 'г. Москва, Остаповский проезд д. 4 стр. 2',
      mapUrl: 'https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto',
    },
  ];

  const phones = [
    {
      number: '+79199947355',
      formattedNumber: '8 (919) 994-73-55',
      title: 'Позвонить на мобильный телефон',
    },
    {
      number: '+74993907915',
      formattedNumber: '8 (499) 390-79-15',
      title: 'Позвонить на городской телефон',
    },
  ];

  const email = {
    address: '9264106363@mail.ru',
    title: 'Написать на электронную почту',
  };

  return (
    <Level
      as="footer"
      class="sm:flex-row max-w-6xl px-4 py-10 sm:px-6 lg:px-12 w-full text-base text-gray-700 mx-auto sm:items-start"
    >
      <div class="flex-1">
        <Logo size="sm" />
        <p class="text-gray-600">
          <span itemProp="name">Skuprum</span> &copy; {currentYear}. Все права защищены.
        </p>
      </div>

      <div class="flex-1 mt-6 sm:mt-0">
        <nav aria-label="Контактная информация">
          <ul class="space-y-2">
            {phones.map((phone) => (
              <li key={phone.number}>
                <Phone phone={phone} />
              </li>
            ))}
            <li>
              <Email email={email} />
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex-1 mt-6 sm:mt-0 sm:text-right">
        <nav aria-label="Адреса организации">
          <ul class="space-y-2">
            {addresses.map((address) => (
              <li key={address.text}>
                <Address address={address} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Level>
  );
});
```
