import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';

export const YandexReviews = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10">
        Что о нас говорят клиенты
      </h2>

      <div class="w-full max-w-3xl mx-auto">
        <iframe
          class="w-full h-[600px] md:h-[800px] rounded-2xl shadow-lg border-none"
          src="https://yandex.ru/maps-reviews-widget/192246959819?comments"
          title="Отзывы на Яндекс.Картах"
          loading="lazy"
          referrerPolicy={'no-referrer'}
          data-cookiescript="accepted"
          data-cookiecategory="strict"
          sandbox="allow-scripts"
          seamless
        />
      </div>

      <a
        href="https://yandex.ru/maps/org/CvetMetLom/192246959819/"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-6 text-sm text-gray-400 hover:text-gray-500 transition"
      >
        Пункт приёма на карте Москвы — Яндекс.Карты
      </a>
    </Level>
  );
});
