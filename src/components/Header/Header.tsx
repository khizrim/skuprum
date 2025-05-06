import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';

export const Header = component$(() => {
  return (
    <Level as="header" class="px-4 py-4 sm:px-6 lg:px-12 w-full max-w-6xl mx-auto text-left">
      {/*<a href="/" class="text-4xl font-extrabold tracking-tight text-blue-700">*/}
      {/*  skuprum*/}
      {/*</a>*/}
      {/*<div class="flex items-center gap-4 flex-wrap mt-2 sm:mt-0">*/}
      {/*  <span class="text-2xl hidden sm:inline" aria-hidden="true">*/}
      {/*    📞*/}
      {/*  </span>*/}
      {/*  <address class="not-italic flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg">*/}
      {/*    <a href="tel:+79199947355" class="hover:text-blue-700 transition block py-1">*/}
      {/*      8&nbsp;(919)&nbsp;994-73-55*/}
      {/*    </a>*/}
      {/*    <a href="tel:+74993907915" class="hover:text-blue-700 transition block py-1">*/}
      {/*      8&nbsp;(499)&nbsp;390-79-15*/}
      {/*    </a>*/}
      {/*  </address>*/}
      {/*</div>*/}

      <div class="mx-auto flex flex-wrap h-auto sm:h-16 justify-center w-full sm:justify-between max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="/" class="text-4xl font-extrabold tracking-tight text-blue-700">
          skuprum
        </a>

        <address class="flex items-center justify-end md:justify-between not-italic">
          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                class="block rounded-md whitespace-nowrap hover:text-blue-700 transition px-5 py-2.5 text-lg font-medium"
                href="tel:+79199947355"
              >
                8&nbsp;(919)&nbsp;994-73-55
              </a>

              <a
                class="hidden rounded-md whitespace-nowrap hover:text-blue-700 transition px-5 py-2.5 text-lg font-medium sm:block"
                href="tel:+74993907915"
              >
                8&nbsp;(499)&nbsp;390-79-15
              </a>
            </div>
          </div>
        </address>
      </div>
    </Level>
  );
});
