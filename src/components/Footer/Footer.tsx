import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Footer = component$(() => {
  return (
    <Level as={'footer'} class={'mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'}>
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center sm:justify-start">
          <a href="/public" class="text-2xl font-extrabold tracking-tight text-blue-700">
            Skuprum
          </a>
        </div>

        <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </Level>
  );
});
