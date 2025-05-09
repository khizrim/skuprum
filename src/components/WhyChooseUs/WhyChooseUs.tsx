import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';

export const WhyChooseUs = component$(() => {
  return (
    <Level
      as="section"
      class="
        max-w-6xl mx-auto
        text-left
      "
    >
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
        Почему нас выбирают клиенты
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
        <div class="flex flex-col items-start gap-6 py-6 bg-white rounded-2xl">
          <div class="text-4xl sm:text-5xl">💰</div>
          <h3 class="text-xl sm:text-2xl font-semibold">Максимальные цены</h3>
          <p class="text-base sm:text-lg text-gray-500">
            До <strong class="text-gray-900">777 ₽</strong> за кг медного кабеля — честно, без
            скрытых удержаний.
          </p>
        </div>

        <div class="flex flex-col items-start gap-6 py-6 bg-white rounded-2xl">
          <div class="text-4xl sm:text-5xl">🚚</div>
          <h3 class="text-xl sm:text-2xl font-semibold">Быстрый вывоз</h3>
          <p class="text-base sm:text-lg text-gray-500">
            Вывозим <strong class="text-gray-900">цветмет от 50 кг</strong> и{' '}
            <strong class="text-gray-900">чермет от 500 кг</strong> в день заявки.
          </p>
        </div>

        <div class="flex flex-col items-start gap-6 py-6 bg-white rounded-2xl">
          <div class="text-4xl sm:text-5xl">⚖️</div>
          <h3 class="text-xl sm:text-2xl font-semibold">Честное взвешивание</h3>
          <p class="text-base sm:text-lg text-gray-500">
            Электронные весы, видеофиксация по запросу.
          </p>
        </div>

        <div class="flex flex-col items-start gap-6 py-6 bg-white rounded-2xl">
          <div class="text-4xl sm:text-5xl">💳</div>
          <h3 class="text-xl sm:text-2xl font-semibold">Оплата сразу</h3>
          <p class="text-base sm:text-lg text-gray-500">
            Наличными или переводом за 5 минут после приёма.
          </p>
        </div>
      </div>
    </Level>
  );
});
