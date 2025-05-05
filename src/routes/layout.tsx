import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Header } from '~/components/deprecated/Header/Header';
import { Footer } from '~/components/deprecated/Footer/Footer';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="">
      <div class="">
        <main class="">
          <Slot />
        </main>
      </div>
    </div>
  );
});
