import { component$ } from '@builder.io/qwik';

export interface FooterProps {}

export const Footer = component$<FooterProps>(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="px-4 py-10 sm:px-6 lg:px-12 border-t border-gray-200 mt-12 text-sm text-gray-600">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
        {/* Блок 1: Логотип и копирайт */}
        <div>
          <div class="text-xl font-bold text-blue-700">Skuprum</div>
          <div class="mt-2">&copy; {currentYear} Skuprum. Все права защищены.</div>
        </div>

        {/* Блок 2: Контакты */}
        <div class="flex flex-col gap-1">
          <a href="tel:+79199947355" class="hover:text-blue-700 transition">
            📞 8&nbsp;(919)&nbsp;994-73-55
          </a>
          <a href="tel:+74993907915" class="hover:text-blue-700 transition">
            📞 8&nbsp;(499)&nbsp;390-79-15
          </a>
          <a
            href="mailto:9264106363@mail.ru?subject=Заявка на приём металла"
            class="mt-2 inline-block w-fit px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            Оставить заявку
          </a>
        </div>

        {/* Блок 3: Адреса */}
        <div class="flex flex-col gap-3 text-gray-700">
          <div>
            <div>📍 г. Москва, ул. Смольная д. 2</div>
            <a
              href="https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline text-sm"
            >
              Построить маршрут
            </a>
          </div>
          <div>
            <div>📍 г. Москва, Остаповский проезд д. 4 стр. 2</div>
            <a
              href="https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline text-sm"
            >
              Построить маршрут
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
});
