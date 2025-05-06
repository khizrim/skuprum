import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Main } from '~/components/Main';
import { Footer } from '~/components/Footer';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Header />
      <Main>
        <Slot />
      </Main>
      <Footer />
    </>
  );
});
