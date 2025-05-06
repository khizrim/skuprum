import { component$, Slot } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Main = component$(() => {
  return (
    <Level as="main" class="grow px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <Slot />
    </Level>
  );
});
