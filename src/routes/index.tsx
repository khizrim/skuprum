import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Masthead } from '~/components/Masthead';
import { WhatWeAccept } from '~/components/WhatWeAccept';
import { OurApproach } from '~/components/OurApproach';
import { WhyChooseUs } from '~/components/WhyChooseUs';
import { HowWeWork } from '~/components/HowWeWork';
import { YandexReviews } from '~/components/YandexReviews';
import { MapWithLocation } from '~/components/MapWithLocation';

export default component$(() => {
  return (
    <>
      <Masthead />
      <WhatWeAccept />
      <OurApproach />
      <WhyChooseUs />
      <MapWithLocation />
      <HowWeWork />
      <YandexReviews />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Приём металлолома в Москве — высокие цены, быстрый вывоз',
  meta: [
    {
      name: 'description',
      content:
        'Прием меди, кабеля и цветных металлов в Москве. Высокие цены, точное взвешивание, моментальная оплата. 7 пунктов приёма в Москве и области.',
    },
    {
      name: 'keywords',
      content:
        'прием металла, сдать медь, скупка кабеля, прием цветного металла, высокие цены на металлолом Москва',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      property: 'og:title',
      content: 'Приём металлолома в Москве — высокие цены, быстрый вывоз',
    },
    {
      property: 'og:description',
      content:
        'Сдайте медь, кабель, цветной металл по максимальной цене с вывозом в день обращения и моментальной оплатой.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://skuprum.ru',
    },
    {
      property: 'og:image',
      content: 'https://skuprum.ru/og.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Приём металлолома в Москве — выгодно, быстро, честно',
    },
    {
      name: 'twitter:description',
      content:
        'Прием меди, кабеля и других металлов по высоким ценам. Оставьте заявку — приедем в день обращения!',
    },
    {
      name: 'twitter:image',
      content: 'https://skuprum.ru/og.png',
    },
    {
      httpEquiv: 'Content-Security-Policy',
      content: `
          default-src 'self';
          script-src 'self' https://mc.yandex.ru https://mc.yandex.com https://yastatic.net;
          connect-src 'self' https://mc.yandex.ru https://mc.yandex.com https://yandex.ru;
          img-src 'self' data: https://mc.yandex.ru https://mc.yandex.com;
          frame-src https://yandex.ru https://yandex.ru/maps-reviews-widget https://*.yandex.ru;
        `
        .replace(/\s+/g, ' ')
        .trim(),
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
  ],
  links: [
    {
      rel: 'preconnect',
      href: 'https://mc.yandex.ru',
    },
  ],
  scripts: [
    {
      key: 'text/javascript',
      props: {
        type: 'text/javascript',
      },
      script: `
        (function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
          m[i].l = 1 * new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) return;
          }
          k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
        ym(101890997, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
      `,
    },
    {
      key: 'application/ld+json',
      props: {
        type: 'application/ld+json',
      },
      script: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Приём металла — Skuprum',
        image: 'https://skuprum.ru',
        url: 'https://skuprum.ru',
        telephone: '8 (499) 390-79-15',
        email: '9264106363@mail.ru',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Москва',
          streetAddress: 'ул. Смольная, д. 2',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '23:00',
        },
        priceRange: '₽',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '25',
        },
      }),
    },
  ],
};
