import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Header } from '~/components/Header/Header';
import { Footer } from '~/components/Footer/Footer';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col bg-background text-dark font-sans antialiased dark:bg-darkBackground dark:text-darkText">
      <div class="w-full max-w-screen-xl mx-auto px-4 md:px-8 flex-grow">
        <Header />
        <main class="py-8">
          <Slot />
        </main>
        <Footer />
      </div>
    </div>
  );
});
