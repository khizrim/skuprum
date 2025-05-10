import { component$, Slot } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Main = component$(() => {
  return (
    <Level
      as="main"
      class="grow gap-16 sm:gap-32 px-8 sm:py-8 mb-24 sm:px-8 lg:px-12 max-w-6xl w-full mx-auto justify-start"
    >
      <Slot />
    </Level>
  );
});
