import { component$ } from '@builder.io/qwik';

export const WhyChooseUs = component$(() => {
  return (
    <section
      id="advantages"
      class="px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left"
    >
      <h2 class="text-3xl font-bold mb-10 text-gray-900 text-center">
        Почему нас выбирают клиенты
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <div class="flex flex-col items-start gap-3 p-4 bg-white rounded-xl">
          <div class="text-3xl">💰</div>
          <h3 class="text-xl font-semibold">Максимальные цены</h3>
          <p class="text-sm text-gray-700">
            До <strong>777 ₽</strong> за кг медного кабеля — честно, без скрытых
            удержаний.
          </p>
        </div>

        <div class="flex flex-col items-start gap-3 p-4 bg-white rounded-xl">
          <div class="text-3xl">🚚</div>
          <h3 class="text-xl font-semibold">Быстрый вывоз</h3>
          <p class="text-sm text-gray-700">
            Вывозим <strong>цветмет от 50 кг</strong> и{' '}
            <strong>чермет от 500 кг</strong> в день заявки.
          </p>
        </div>

        <div class="flex flex-col items-start gap-3 p-4 bg-white rounded-xl">
          <div class="text-3xl">⚖️</div>
          <h3 class="text-xl font-semibold">Честное взвешивание</h3>
          <p class="text-sm text-gray-700">
            Электронные весы, видеофиксация по запросу.
          </p>
        </div>

        <div class="flex flex-col items-start gap-3 p-4 bg-white rounded-xl">
          <div class="text-3xl">💳</div>
          <h3 class="text-xl font-semibold">Оплата сразу</h3>
          <p class="text-sm text-gray-700">
            Наличными или переводом за 5 минут после приёма.
          </p>
        </div>
      </div>
    </section>
  );
});
