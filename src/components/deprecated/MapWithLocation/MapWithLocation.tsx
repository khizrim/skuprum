import { $, component$, useSignal } from '@builder.io/qwik';

interface Location {
  label: string;
  lat: number;
  lon: number;
  link: string;
}

const locations: Location[] = [
  {
    label: 'г. Москва, ул. Смольная д. 2',
    lat: 55.844624,
    lon: 37.502101,
    link: 'https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto',
  },
  {
    label: 'г. Москва, Остаповский проезд д. 4 стр. 2',
    lat: 55.719817,
    lon: 37.704367,
    link: 'https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto',
  },
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export const MapWithLocation = component$(() => {
  const distance = useSignal(0);
  const nearest = useSignal<Location | null>(null);
  const error = useSignal('');
  const loading = useSignal(false);

  const findNearest = $(() => {
    loading.value = true;
    error.value = '';
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          let closest: Location | null = null;
          let minDistance = Infinity;

          for (const loc of locations) {
            const dist = getDistance(latitude, longitude, loc.lat, loc.lon);
            if (dist < minDistance) {
              minDistance = dist;
              closest = loc;
              distance.value = dist;
            }
          }

          nearest.value = closest;
          loading.value = false;
        },
        () => {
          error.value = 'Не удалось определить местоположение.';
          loading.value = false;
        },
        { enableHighAccuracy: true }
      );
    } else {
      error.value = 'Геолокация не поддерживается вашим браузером.';
      loading.value = false;
    }
  });

  return (
    <section class="mt-24 px-4 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">
        Пункты приёма на карте
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Карта */}
        <div class="rounded-2xl overflow-hidden min-h-[450px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A8064e756cab809c744ef5266e78fac0082a426897a5bdadef5cc4e4ae106370c&amp;source=constructor"
            width="100%"
            height="450"
            style={{ border: '0' }}
          ></iframe>
        </div>

        {/* Ближайший пункт */}
        <div class="bg-blue-50 p-6 rounded-2xl text-center shadow">
          <h3 class="text-xl font-semibold mb-4 text-gray-900">
            📍 Ближайший пункт приёма
          </h3>

          <button
            onClick$={findNearest}
            disabled={loading.value}
            class="mb-4 inline-block px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading.value ? 'Определяем...' : 'Найти ближайший пункт'}
          </button>

          {error.value && <p class="text-red-600 text-sm">{error.value}</p>}

          {nearest.value && (
            <>
              <p class="text-lg text-gray-800">{nearest.value.label}</p>
              <p class="text-sm text-gray-500 mt-1">
                Примерно {distance.value.toFixed(1)} км от вас
              </p>
              <a
                href={nearest.value.link}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-block px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition"
              >
                Построить маршрут
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
});
