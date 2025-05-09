// src/components/WhatWeAccept/WhatWeAccept.tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';

export const WhatWeAccept = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto py-16 text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">Что вы можете сдать нам</h2>
      <p class="text-lg sm:text-xl text-gray-600 mb-12">
        Мы принимаем цветной и чёрный металлолом в любом виде — оплачиваем дорого, взвешиваем
        честно. От 1&nbsp;кг до оптовых партий.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        {/* Кабель в изоляции */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">🔌</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Кабель в изоляции</div>
            <div class="text-base sm:text-lg text-gray-500">Любые объёмы и сечения.</div>
          </div>
        </div>

        {/* Медь */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">🟠</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Медь</div>
            <div class="text-base sm:text-lg text-gray-500">
              Блеск, кусок, микс, луженная. Высокая цена.
            </div>
          </div>
        </div>

        {/* Чермет */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">⚙️</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Чермет</div>
            <div class="text-base sm:text-lg text-gray-500">Строительный и промышленный лом.</div>
          </div>
        </div>

        {/* Аккумуляторы */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">🔋</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Аккумуляторы</div>
            <div class="text-base sm:text-lg text-gray-500">Свинцовые, автомобильные, ИБП.</div>
          </div>
        </div>

        {/* Латунь */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">🟡</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Латунь</div>
            <div class="text-base sm:text-lg text-gray-500">
              Микс, кусковая, радиаторы, бойлерная трубка, стружка.
            </div>
          </div>
        </div>

        {/* Алюминий */}
        <div class="flex items-start gap-6">
          <span class="text-4xl sm:text-5xl">🥫</span>
          <div>
            <div class="text-xl sm:text-2xl font-semibold">Алюминий</div>
            <div class="text-base sm:text-lg text-gray-500">
              Эл-тех, профиль, микс, диски, пищевой, моторный, офсет, банка, радиаторы, стружка.
            </div>
          </div>
        </div>
      </div>
    </Level>
  );
});
