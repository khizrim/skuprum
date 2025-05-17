import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Copper from '~/images/copper.webp?quality=80&jsx';
import Cables from '~/images/cables.webp?quality=80&jsx';
import Brass from '~/images/brass.webp?quality=80&jsx';
import Bronze from '~/images/bronze.webp?quality=80&jsx';
import Aluminium from '~/images/aluminium.webp?quality=80&jsx';
import Can from '~/images/can.webp?quality=80&jsx';
import Stainless from '~/images/stainless.webp?quality=80&jsx';
import Lead from '~/images/lead.webp?quality=80&jsx';
import Battery from '~/images/battery.webp?quality=80&jsx';
import Scrap from '~/images/scrap.webp?quality=80&jsx';
import Titanium from '~/images/titanium.webp?quality=80&jsx';
import Stannum from '~/images/stannum.webp?quality=80&jsx';
import Pos from '~/images/pos.webp?quality=80&jsx';
import Hss from '~/images/hss.webp?quality=80&jsx';
import Nichrome from '~/images/nichrome.webp?quality=80&jsx';
import Tantalum from '~/images/tantalum.webp?quality=80&jsx';
import Molybdenum from '~/images/molybdenum.webp?quality=80&jsx';
import Tungsten from '~/images/tungsten.webp?quality=80&jsx';
import Niobium from '~/images/niobium.webp?quality=80&jsx';
import Cobalt from '~/images/cobalt.webp?quality=80&jsx';
import Bismuth from '~/images/bismuth.webp?quality=80&jsx';
import Babbitt from '~/images/babbitt.webp?quality=80&jsx';

export const metalImages = {
  copper: Copper,
  cables: Cables,
  brass: Brass,
  bronze: Bronze,
  aluminium: Aluminium,
  can: Can,
  stainless: Stainless,
  lead: Lead,
  battery: Battery,
  scrap: Scrap,
  titanium: Titanium,
  stannum: Stannum,
  pos: Pos,
  hss: Hss,
  nichrome: Nichrome,
  tantalum: Tantalum,
  molybdenum: Molybdenum,
  tungsten: Tungsten,
  niobium: Niobium,
  cobalt: Cobalt,
  bismuth: Bismuth,
  babbitt: Babbitt,
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

    console.log(metal);

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

  const CurrentImage = currentMetal.value ? metalImages[currentMetal.value] : null;
  const PreviousImage = previousMetal.value ? metalImages[previousMetal.value] : null;

  return (
    <>
      <div class="absolute inset-0 w-full h-full object-contain opacity-100">
        {CurrentImage && <CurrentImage key={currentMetal.value} />}
      </div>
      <div
        class={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          fadeOut.value ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {PreviousImage && <PreviousImage key={previousMetal.value} />}
      </div>
    </>
  );
});
