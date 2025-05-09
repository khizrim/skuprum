import { component$, Slot } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Main = component$(() => {
  return (
    <Level
      as="main"
      class="grow gap-12 sm:gap-32 px-4 py-8 mb-24 sm:px-6 lg:px-12 max-w-6xl w-full mx-auto justify-start"
    >
      <Slot />
    </Level>
  );
});
