import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Masthead } from '~/components/Masthead';

export default component$(() => {
  return (
    <>
      <Masthead />
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
      content: 'https://skuprum.ru/preview.jpg',
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
      content: 'https://skuprum.ru/preview.jpg',
    },
    {
      name: 'google-site-verification',
      content: 'oSJ-LpZOxWVGuoYDmUpi8gI1KIFmb3sXjYKAN22ExXo',
    },
  ],
  links: [],
  scripts: [
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
