import { component$, Slot } from '@builder.io/qwik';

type LevelProps = {
  id?: string;
  as?: keyof HTMLElementTagNameMap;
  class?: string;
};

export const Level = component$(({ id, as = 'div', class: className = '' }: LevelProps) => {
  const Tag = as as any;

  return (
    <Tag id={id} class={`flex flex-col ${className}`}>
      <Slot />
    </Tag>
  );
});
