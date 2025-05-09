import { component$ } from '@builder.io/qwik';

export interface PhoneProps {
  phone: {
    number: string;
    formattedNumber: string;
    title?: string;
  };
}

export const Phone = component$<PhoneProps>(({ phone }) => {
  return (
    <div itemScope itemType="https://schema.org/ContactPoint">
      <meta itemProp="contactType" content="customer support" />
      <a
        href={`tel:${phone.number}`}
        class="inline-block hover:text-blue-700 transition"
        itemProp="telephone"
        title={phone.title || `Позвонить по номеру ${phone.formattedNumber}`}
        aria-label={phone.title || `Позвонить по номеру ${phone.formattedNumber}`}
      >
        {phone.formattedNumber}
      </a>
    </div>
  );
});
