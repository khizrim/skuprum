import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="mt-24 px-4 py-12 bg-gray-50 text-sm text-gray-700 border-t border-gray-200">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
        {/* Логотип и копирайт */}
        <div>
          <div class="text-xl font-bold text-blue-700">Skuprum</div>
          <div class="mt-2">
            &copy; {currentYear} Skuprum. Все права защищены.
          </div>
        </div>

        {/* Контактная информация */}
        <div class="flex flex-col gap-2">
          <a
            href="tel:+79199947355"
            class="block min-h-[48px] py-2 hover:text-blue-700 transition"
          >
            📞 8 (919) 994-73-55
          </a>
          <a
            href="tel:+74993907915"
            class="block min-h-[48px] py-2 hover:text-blue-700 transition"
          >
            📞 8 (499) 390-79-15
          </a>
          <a
            href="mailto:9264106363@mail.ru"
            class="block min-h-[48px] py-2 text-blue-600 hover:underline"
          >
            ✉️ 9264106363@mail.ru
          </a>
        </div>

        {/* Адреса с картой */}
        <div class="flex flex-col gap-2">
          <a
            href="https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
            class="block min-h-[48px] py-2 hover:text-blue-700 transition"
          >
            📍 г. Москва, ул. Смольная д. 2
          </a>
          <a
            href="https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
            class="block min-h-[48px] py-2 hover:text-blue-700 transition"
          >
            📍 г. Москва, Остаповский проезд д. 4 стр. 2
          </a>
        </div>
      </div>
    </footer>
  );
});
