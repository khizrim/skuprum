import { component$, Slot } from '@builder.io/qwik';

type LevelProps = {
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};

export const Level = component$(({ as = 'div', class: className = '' }: LevelProps) => {
  const Tag = as as any;

  return (
    <Tag
      class={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 ${className}`}
    >
      <Slot />
    </Tag>
  );
});
