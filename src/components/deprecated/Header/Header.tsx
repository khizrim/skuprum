import { component$ } from '@builder.io/qwik';

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
  return (
    <header class="px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="/public"
          class="text-2xl font-extrabold tracking-tight text-blue-700"
        >
          Skuprum
        </a>

        <div class="flex items-center gap-3 text-base font-semibold text-gray-900">
          <span class="text-xl">📞</span>
          <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <a href="tel:+79199947355" class="hover:text-blue-700 transition">
              8&nbsp;(919)&nbsp;994-73-55
            </a>
            <a href="tel:+74993907915" class="hover:text-blue-700 transition">
              8&nbsp;(499)&nbsp;390-79-15
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
