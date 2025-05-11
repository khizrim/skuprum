import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex flex-col items-center justify-center text-center p-6">
      <h1 class="text-4xl font-bold mb-4">Страница не найдена</h1>
      <p class="text-lg mb-6">Похоже, такой страницы нет. Возможно, вы ошиблись адресом.</p>
      <a
        href="/"
        class="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Вернуться на главную
      </a>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Ошибка 404 — Страница не найдена | Skuprum',
  meta: [
    {
      name: 'description',
      content: 'Такой страницы нет. Возможно, вы ошиблись адресом или страница была удалена.',
    },
    {
      name: 'robots',
      content: 'noindex, follow',
    },
    {
      property: 'og:title',
      content: 'Ошибка 404 — Страница не найдена',
    },
    {
      property: 'og:description',
      content: 'Мы не смогли найти запрашиваемую страницу. Попробуйте вернуться на главную.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://skuprum.ru/404',
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
      content: 'Ошибка 404 — Страница не найдена | Skuprum',
    },
    {
      name: 'twitter:description',
      content: 'Такой страницы не существует. Перейдите на главную или воспользуйтесь меню.',
    },
    {
      name: 'twitter:image',
      content: 'https://skuprum.ru/og.png',
    },
  ],
  links: [],
};
