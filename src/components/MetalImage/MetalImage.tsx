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
