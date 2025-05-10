import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';
import { Logo } from '~/components/Logo';
import { Contacts } from '~/components/Contacts';
export const Header = component$(() => {
  return (
    <Level
      as="header"
      class="sm:flex-row sm:items-center sm:justify-between px-8 py-4 sm:px-8 lg:px-12 w-full max-w-6xl mx-auto text-left justify-center items-start"
    >
      <Logo />
      <Contacts />
    </Level>
  );
});
