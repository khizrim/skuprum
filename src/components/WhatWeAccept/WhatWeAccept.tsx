import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { acceptItems } from '~/components/WhatWeAccept/WhatWeAccept.constants';

export interface AcceptItem {
  icon: string;
  title: string;
  description: string;
}

export const WhatWeAccept = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto py-16 text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
        {typo('Что вы можете сдать нам', { header: true })}
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 mb-12">
        {typo(
          'Мы принимаем цветной и чёрный металлолом в любом виде — оплачиваем дорого, взвешиваем честно. От 1 кг до оптовых партий.',
          { digits: true },
        )}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        {acceptItems.map((item) => (
          <div class="flex items-start gap-6" key={item.title}>
            <span class="text-4xl sm:text-5xl">{item.icon}</span>
            <div>
              <div class="text-xl sm:text-2xl font-semibold">{typo(item.title)}</div>
              <div class="text-base sm:text-lg text-gray-500">{typo(item.description)}</div>
            </div>
          </div>
        ))}
      </div>
    </Level>
  );
});
