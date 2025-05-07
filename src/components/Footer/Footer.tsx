import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import { Logo } from '~/components/Logo';
import { Address } from '~/components/Address';
import { Phone } from '~/components/Phone';
import { Email } from '~/components/Email';

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const addresses = [
    {
      text: 'г. Москва, ул. Смольная д. 2',
      mapUrl: 'https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto',
    },
    {
      text: 'г. Москва, Остаповский проезд д. 4 стр. 2',
      mapUrl: 'https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto',
    },
  ];

  const phones = [
    {
      number: '+79199947355',
      formattedNumber: '8 (919) 994-73-55',
      title: 'Позвонить на мобильный телефон',
    },
    {
      number: '+74993907915',
      formattedNumber: '8 (499) 390-79-15',
      title: 'Позвонить на городской телефон',
    },
  ];

  const email = {
    address: '9264106363@mail.ru',
    title: 'Написать на электронную почту',
  };

  return (
    <footer
      class="max-w-6xl px-4 py-10 sm:px-6 lg:px-12 w-full text-base text-gray-700 mx-auto"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <Level class="sm:items-start">
        <div class="flex-1">
          <Logo size="sm" />
          <p class="text-gray-600">
            <span itemProp="name">Skuprum</span> &copy; {currentYear}. Все права защищены.
          </p>
        </div>

        <div class="flex-1 mt-6 sm:mt-0">
          <nav aria-label="Контактная информация">
            <ul class="space-y-2">
              {phones.map((phone) => (
                <li key={phone.number}>
                  <Phone phone={phone} />
                </li>
              ))}
              <li>
                <Email email={email} />
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex-1 mt-6 sm:mt-0 sm:text-right">
          <nav aria-label="Адреса организации">
            <ul class="space-y-2">
              {addresses.map((address) => (
                <li key={address.text}>
                  <Address address={address} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Level>
    </footer>
  );
});
