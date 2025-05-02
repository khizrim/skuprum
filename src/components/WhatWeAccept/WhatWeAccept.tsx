import { component$ } from '@builder.io/qwik';

export const WhatWeAccept = component$(() => {
  return (
    <section class="px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left">
      <h2 class="text-3xl font-bold mb-4">Что вы можете сдать нам</h2>
      <p class="text-lg text-gray-700 mb-8">
        Мы принимаем металлолом в любом виде — оплачиваем высоко, взвешиваем
        честно. От 1 кг до оптовых партий.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
        <div class="flex items-start gap-3">
          <span class="text-2xl">🔌</span>
          <div>
            <div class="font-semibold">Кабель в изоляции</div>
            <div class="text-sm text-gray-600">Любые длины и сечения</div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-2xl">🟠</span>
          <div>
            <div class="font-semibold">Медь</div>
            <div class="text-sm text-gray-600">
              Высокая цена за чистый металл
            </div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-2xl">⚙️</span>
          <div>
            <div class="font-semibold">Чермет</div>
            <div class="text-sm text-gray-600">
              Строительный и промышленный лом
            </div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-2xl">🔋</span>
          <div>
            <div class="font-semibold">Аккумуляторы</div>
            <div class="text-sm text-gray-600">
              Свинцовые, автомобильные, ИБП
            </div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-2xl">🧱</span>
          <div>
            <div class="font-semibold">Алюминий, латунь, бронза</div>
            <div class="text-sm text-gray-600">Профиль, лист, стружка</div>
          </div>
        </div>
      </div>
    </section>
  );
});
