import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';
import { Logo } from '~/components/Logo';
import { Contacts } from '~/components/Contacts';

export const Header = component$(() => {
  return (
    <Level as="header" class="px-4 py-4 sm:px-6 lg:px-12 w-full max-w-6xl mx-auto text-left">
      <div class="mx-auto flex flex-wrap h-auto sm:h-16 justify-center w-full sm:justify-between max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <Contacts />
      </div>
    </Level>
  );
});
