import { component$ } from '@builder.io/qwik';

export interface LogoProps {
  size?: 'sm' | 'lg';
}

export const Logo = component$<LogoProps>(({ size = 'lg' }: LogoProps) => {
  return (
    <a
      href="/"
      class={`font-extrabold tracking-tight text-blue-700 ${size === 'sm' ? 'text-2xl' : 'text-4xl'}`}
      aria-label="Скупрум - Вернуться на главную"
      title="Вернуться на главную"
      lang="ru"
    >
      <span class="sr-only">Скупрум</span>
      <span aria-hidden="true">skuprum</span>
    </a>
  );
});
