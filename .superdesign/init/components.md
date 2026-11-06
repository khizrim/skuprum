# Components (Qwik 1.13 + Tailwind v4, custom components, no UI library)

Framework: Qwik + Qwik City, CSS: Tailwind CSS v4 via @tailwindcss/vite, @qwik-ui/headless available. Russian-language single-page site for scrap metal buying in Moscow.

### `src/components/Level/Level.tsx`
```tsx
import { component$, Slot } from '@builder.io/qwik';

type LevelProps = {
  id?: string;
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};

export const Level = component$(({ id, as = 'div', class: className = '' }: LevelProps) => {
  const Tag = as as any;

  return (
    <Tag id={id} class={`flex flex-col ${className}`}>
      <Slot />
    </Tag>
  );
});
```

### `src/components/CTAButtons/CTAButtons.tsx`
```tsx
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
```

### `src/components/Logo/Logo.tsx`
```tsx
import { component$ } from '@builder.io/qwik';

export interface LogoProps {
  size?: 'sm' | 'lg';
}

export const Logo = component$<LogoProps>(({ size = 'lg' }: LogoProps) => {
  return (
    <a
      href="/"
      class={`font-extrabold tracking-tight text-blue-700 ${size === 'sm' ? 'text-2xl' : 'text-4xl'}`}
      aria-label="Скупрум - Вернуться на главную"
      title="Вернуться на главную"
      lang="ru"
    >
      <span>skuprum</span>
    </a>
  );
});
```

### `src/components/Phone/Phone.tsx`
```tsx
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
```

### `src/components/Email/Email.tsx`
```tsx
import { component$ } from '@builder.io/qwik';

export interface EmailProps {
    email: {
        address: string;
        title?: string;
    };
}

export const Email = component$<EmailProps>(({ email }) => {
    return (
        <div itemScope itemType="https://schema.org/ContactPoint">
            <meta itemProp="contactType" content="customer service" />
            <a
                href={`mailto:${email.address}`}
                class="inline-block text-blue-600 hover:underline"
                itemProp="email"
                title={email.title || `Написать на ${email.address}`}
                aria-label={email.title || `Написать на ${email.address}`}
            >
                ✉️ {email.address}
            </a>
        </div>
    );
}); ```

### `src/components/Address/Address.tsx`
```tsx
import { component$ } from '@builder.io/qwik';

export interface AddressProps {
  address: {
    text: string;
    mapUrl: string;
  };
}

export const Address = component$<AddressProps>(({ address }) => {
  return (
    <address class="not-italic">
      <a
        href={address.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block hover:text-blue-700 transition"
      >
        📍 {address.text}
      </a>
    </address>
  );
});
```

### `src/components/Contacts/Contacts.tsx`
```tsx
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
      <div class="hidden sm:flex items-center gap-4" aria-label="Контактная информация">
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
```

### `src/components/MetalImage/MetalImage.tsx`
```tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Copper from '~/images/copper.webp?quality=80&w=704&h=704&jsx';
import Cables from '~/images/cables.webp?quality=80&w=704&h=704&jsx';
import Brass from '~/images/brass.webp?quality=80&w=704&h=704&jsx';
import Bronze from '~/images/bronze.webp?quality=80&w=704&h=704&jsx';
import Aluminium from '~/images/aluminium.webp?quality=80&w=704&h=704&jsx';
import Can from '~/images/can.webp?quality=80&w=704&h=704&jsx';
import Stainless from '~/images/stainless.webp?quality=80&w=704&h=704&jsx';
import Lead from '~/images/lead.webp?quality=80&w=704&h=704&jsx';
import Battery from '~/images/battery.webp?quality=80&w=704&h=704&jsx';
import Scrap from '~/images/scrap.webp?quality=80&w=704&h=704&jsx';
import Titanium from '~/images/titanium.webp?quality=80&w=704&h=704&jsx';
import Stannum from '~/images/stannum.webp?quality=80&w=704&h=704&jsx';
import Pos from '~/images/pos.webp?quality=80&w=704&h=704&jsx';
import Hss from '~/images/hss.webp?quality=80&w=704&h=704&jsx';
import Nichrome from '~/images/nichrome.webp?quality=80&w=704&h=704&jsx';
import Tantalum from '~/images/tantalum.webp?quality=80&w=704&h=704&jsx';
import Molybdenum from '~/images/molybdenum.webp?quality=80&w=704&h=704&jsx';
import Tungsten from '~/images/tungsten.webp?quality=80&w=704&h=704&jsx';
import Niobium from '~/images/niobium.webp?quality=80&w=704&h=704&jsx';
import Cobalt from '~/images/cobalt.webp?quality=80&w=704&h=704&jsx';
import Bismuth from '~/images/bismuth.webp?quality=80&w=704&h=704&jsx';
import Babbitt from '~/images/babbitt.webp?quality=80&w=704&h=704&jsx';

export const metalImages = {
  copper: {
    component: Copper,
    alt: 'Медь',
  },
  cables: {
    component: Cables,
    alt: 'Кабель',
  },
  brass: {
    component: Brass,
    alt: 'Латунь',
  },
  bronze: {
    component: Bronze,
    alt: 'Бронза',
  },
  aluminium: {
    component: Aluminium,
    alt: 'Алюминий',
  },
  can: {
    component: Can,
    alt: 'Банки',
  },
  stainless: {
    component: Stainless,
    alt: 'Нержавейка',
  },
  lead: {
    component: Lead,
    alt: 'Свинец',
  },
  battery: {
    component: Battery,
    alt: 'Аккумуляторы',
  },
  scrap: {
    component: Scrap,
    alt: 'Чермет',
  },
  titanium: {
    component: Titanium,
    alt: 'Титан',
  },
  stannum: {
    component: Stannum,
    alt: 'Олово',
  },
  pos: {
    component: Pos,
    alt: 'ПОС',
  },
  hss: {
    component: Hss,
    alt: 'Быстрорез',
  },
  nichrome: {
    component: Nichrome,
    alt: 'Нихром',
  },
  tantalum: {
    component: Tantalum,
    alt: 'Тантал',
  },
  molybdenum: {
    component: Molybdenum,
    alt: 'Молибден',
  },
  tungsten: {
    component: Tungsten,
    alt: 'Вольфрам',
  },
  niobium: {
    component: Niobium,
    alt: 'Ниобий',
  },
  cobalt: {
    component: Cobalt,
    alt: 'Кобальт',
  },
  bismuth: {
    component: Bismuth,
    alt: 'Висмут',
  },
  babbitt: {
    component: Babbitt,
    alt: 'Баббит',
  },
};

type MetalKey = keyof typeof metalImages;

type MetalImageProps = {
  metal: MetalKey;
};

export const MetalImage = component$(({ metal }: MetalImageProps) => {
  const currentMetal = useSignal<MetalKey | null>(null);
  const previousMetal = useSignal<MetalKey | null>(null);

  const fadeOut = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => metal);

    if (metal !== currentMetal.value) {
      previousMetal.value = currentMetal.value;
      currentMetal.value = metal;
      fadeOut.value = false;

      requestAnimationFrame(() => {
        fadeOut.value = true;
      });

      setTimeout(() => {
        previousMetal.value = null;
      }, 1000);
    }
  });

  const CurrentImage = currentMetal.value ? metalImages[currentMetal.value].component : null;
  const PreviousImage = previousMetal.value ? metalImages[previousMetal.value].component : null;

  return (
    <>
      <div class="absolute inset-0 w-full h-full object-contain opacity-100">
        {currentMetal.value && CurrentImage && (
          <CurrentImage
            key={currentMetal.value}
            alt={metalImages[currentMetal.value].alt || ''}
            loading={'eager'}
          />
        )}
      </div>
      <div
        class={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          fadeOut.value ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {previousMetal.value && PreviousImage && (
          <PreviousImage
            key={previousMetal.value}
            alt={metalImages[previousMetal.value].alt || ''}
            loading={'lazy'}
          />
        )}
      </div>
    </>
  );
});
```
