import { component$ } from '@builder.io/qwik';
import { Phone } from '~/components/Phone/Phone';
import { Email } from '~/components/Email/Email';

interface ContactsProps {
  showEmail?: boolean;
}

export const Contacts = component$<ContactsProps>(({ showEmail = false }) => {
  const phones = [
    {
      number: '+79199947355',
      formattedNumber: '8 (919) 994-73-55',
      title: 'Мобильный телефон',
    },
    {
      number: '+74993907915',
      formattedNumber: '8 (499) 390-79-15',
      title: 'Городской телефон',
    },
  ];

  const email = {
    address: '9264106363@mail.ru',
    title: 'Электронная почта',
  };

  return (
    <address
      class="flex items-center justify-end md:justify-between not-italic"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <span
        class="text-xl"
        role="img"
        aria-label="Контакты"
      >
        {showEmail ? '📞 ✉️' : '📞'}
      </span>
      <div
        class="flex items-center gap-4"
        aria-label="Контактная информация"
      >
        <div class="sm:flex sm:gap-4">
          <div class="rounded-md whitespace-nowrap px-5 py-2.5 text-lg font-medium">
            <Phone phone={phones[0]} />
          </div>

          <div class="hidden rounded-md whitespace-nowrap px-5 py-2.5 text-lg font-medium sm:block">
            <Phone phone={phones[1]} />
          </div>

          {showEmail && (
            <div class="rounded-md whitespace-nowrap px-5 py-2.5 text-lg font-medium">
              <Email email={email} />
            </div>
          )}
        </div>
      </div>
    </address>
  );
});