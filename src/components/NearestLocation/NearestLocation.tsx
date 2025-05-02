import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

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
  const R = 6371; // км
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

export const NearestLocation = component$(() => {
  const distance = useSignal(0);
  const nearest = useSignal<Location | null>(null);
  const error = useSignal('');

  useVisibleTask$(() => {
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
        },
        (err) => {
          error.value = 'Не удалось определить местоположение.';
        },
        { enableHighAccuracy: true }
      );
    } else {
      error.value = 'Геолокация не поддерживается вашим браузером.';
    }
  });

  return (
    <div class="mt-12 max-w-3xl mx-auto p-6 rounded-2xl border-4 border-dashed border-blue-600 bg-white text-center">
      <h2 class="text-xl font-semibold mb-3 flex items-center justify-center gap-2 text-gray-900">
        📍 Ближайший пункт приёма
      </h2>

      {error.value && (
        <>
          <p class="text-red-600 mb-2">
            Не удалось определить ваше местоположение.
          </p>
          <p class="text-gray-600 text-sm">
            Проверьте разрешения в браузере или выберите пункт вручную ниже.
          </p>
        </>
      )}

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
  );
});
