import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { chooseItems } from '~/components/WhyChooseUs/WhyChooseUs.constants';

export interface ChooseItem {
  icon: string;
  title: string;
  description: string;
}

export const WhyChooseUs = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-8 text-gray-900">
        {typo('Почему нас выбирают клиенты', { header: true })}
      </h2>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-y-12 list-none p-0 m-0">
        {chooseItems.map((item) => (
          <li
            class="flex flex-col items-start gap-2 sm:gap-6 py-6 bg-white rounded-2xl"
            key={item.title}
          >
            <div class="text-4xl sm:text-5xl">{item.icon}</div>
            <p class="text-xl sm:text-2xl font-semibold m-0">{typo(item.title)}</p>
            <p
              class="text-base sm:text-lg text-gray-500 m-0"
              dangerouslySetInnerHTML={typo(item.description)}
            />
          </li>
        ))}
      </ul>
    </Level>
  );
});
