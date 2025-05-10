import { component$ } from '@builder.io/qwik';

interface CTAButtonsProps {
  phoneHref: string;
  whatsappHref: string;
  centered?: boolean;
}

export const CTAButtons = component$<CTAButtonsProps>(
  ({ phoneHref, whatsappHref, centered = false }) => {
    return (
      <div class={`mt-8 flex flex-wrap items-center gap-4 ${centered ? 'justify-center' : ''}`}>
        <a
          href={phoneHref}
          class="inline-flex whitespace-nowrap items-center justify-center
           px-6 py-3 text-lg font-medium text-white
           bg-blue-600 rounded-2xl hover:bg-blue-700 transition"
        >
          Позвонить +7 (919) 994-73-55
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex whitespace-nowrap items-center justify-center
           px-6 py-3 text-lg font-medium text-green-700
           border-2 border-green-600 rounded-2xl
           hover:bg-green-50 transition"
        >
          Написать в WhatsApp
        </a>
      </div>
    );
  },
);
