import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';

interface Location {
  label: string;
  metro: string;
  link: string;
}

const locations: Location[] = [
  {
    label: 'г. Москва, ул. Смольная д. 2',
    metro: 'м. Водный стадион',
    link: 'https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto',
  },
  {
    label: 'г. Москва, Остаповский проезд д. 4 стр. 2',
    metro: 'м. Угрешская',
    link: 'https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto',
  },
];

export const MapWithLocation = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        {typo('Наши пункты приёма')}
      </h2>

      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-12 list-none p-0 m-0">
        {locations.map((loc, idx) => (
          <li key={idx} class="flex flex-col bg-white rounded-2xl shadow-lg p-6 gap-6">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">📍</span>
              <div>
                <p class="text-xl sm:text-2xl font-semibold text-gray-900 m-0">{typo(loc.label)}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-lg text-gray-500">🚇</span>
                  <p class="text-base text-gray-600 m-0">{typo(loc.metro)}</p>
                </div>
              </div>
            </div>
            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto block w-full text-center px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              {typo('Построить маршрут')}
            </a>
          </li>
        ))}
      </ul>
    </Level>
  );
});
