import { component$ } from '@builder.io/qwik';
import typo from 'ru-typo';

export const OurApproach = component$(() => {
  return (
    <section class="mt-24 px-4 max-w-5xl mx-auto text-gray-900">
      <div class="bg-gray-100 rounded-3xl p-10 relative">
        <div class="absolute top-[-30px] left-[-20px] text-[100px] text-blue-600 opacity-10 select-none leading-none">
          “
        </div>

        <h2 class="text-3xl font-bold mb-6 text-center">
          {typo('Мы работаем по-честному. Не на словах — на деле.', {
            header: true,
          })}
        </h2>

        <p class="text-xl leading-relaxed text-center max-w-3xl mx-auto text-gray-800">
          {typo(
            'Мы не занижаем вес. Не скрываем удержаний. Приезжаем, взвешиваем, платим — и всё по-честному. Это не маркетинг. Это принцип. Мы зарабатываем честно — и к вам относимся так же.'
          )}
        </p>
      </div>
    </section>
  );
});
