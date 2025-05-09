import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const MetalImage = component$(({ src, alt }: { src: string; alt: string }) => {
  const currentSrc = useSignal(src);
  const previousSrc = useSignal<string | null>(null);
  const fadeOut = useSignal(false);

  useVisibleTask$(({ track }) => {
    track(() => src);

    if (src !== currentSrc.value) {
      previousSrc.value = currentSrc.value;
      currentSrc.value = src;
      fadeOut.value = false;

      requestAnimationFrame(() => {
        fadeOut.value = true;
      });

      setTimeout(() => {
        previousSrc.value = null;
      }, 1000);
    }
  });

  return (
    <>
      <img
        src={currentSrc.value}
        alt={alt}
        class="absolute inset-0 w-full h-full object-contain opacity-100"
      />
      {previousSrc.value && (
        <img
          src={previousSrc.value}
          alt=""
          class={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            fadeOut.value ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </>
  );
});
