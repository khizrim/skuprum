import { component$ } from '@builder.io/qwik';

export const YandexReviews = component$(() => {
  return (
    <section class="mt-24 px-4 max-w-6xl mx-auto text-center overflow-x-hidden">
      <h2 class="text-3xl font-bold mb-8">Что о нас говорят клиенты</h2>

      <div class="w-full max-w-3xl mx-auto" style={{ maxWidth: '600px' }}>
        <iframe
          class="w-full border-none"
          style={{
            height: '800px',
          }}
          src="https://yandex.ru/maps-reviews-widget/192246959819?comments"
          title="Отзывы на Яндекс.Картах"
        ></iframe>
      </div>

      <a
        href="https://yandex.ru/maps/org/CvetMetLom/192246959819/"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-4 text-xs text-gray-400 hover:text-gray-500 transition"
      >
        Пункт приёма на карте Москвы — Яндекс.Карты
      </a>
    </section>
  );
});
