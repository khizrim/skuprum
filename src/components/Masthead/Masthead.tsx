import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Masthead = component$(() => {
  return <Level as="section" class="relative isolate px-6 pt-8 lg:px-8 mx-auto"></Level>;
});
