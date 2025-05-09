import { component$, $, type QRL } from '@builder.io/qwik';
import { type metalOptions } from '~/utils/constants';

export const MetalSelect = component$(({
  options,
  value,
  onChange,
  width,
  flash,
  onRef,
}: {
  options: typeof metalOptions;
  value: string;
  onChange: QRL<(v: string) => void>;
  width: string;
  flash: boolean;
  onRef: (el: HTMLElement) => void;
}) => {
  const handleChange = $(async (e: Event) => {
    await onChange((e.target as HTMLSelectElement).value);
  });

  return (
    <div class="relative inline-block align-middle" style={{ width }}>
      <span
        class={`inline-block px-4 py-2 tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${flash ? 'bg-yellow-100' : ''}`}
        ref={onRef as any}
      >
        {value}
      </span>
      <select
        aria-label="Вид металла"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        value={value}
        onChange$={handleChange}
      >
        {options.map((opt) => (
          <option key={opt.label} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
});