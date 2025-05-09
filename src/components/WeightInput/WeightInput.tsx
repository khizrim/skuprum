import { component$, $, type QRL } from "@builder.io/qwik";

export const WeightInput = component$(({
  value,
  onChange,
  width,
  flash,
  onRef,
}: {
  value: string;
  onChange: QRL<(v: string) => void>;
  width: string;
  flash: boolean;
  onRef: (el: HTMLElement) => void;
}) => {
  const handleInput = $(async (e: Event) => {
    await onChange((e.target as HTMLInputElement).value);
  });

  return (
    <div class="relative inline-block align-middle" style={{ width }}>
      <span
        class={`inline-block px-4 py-2 tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${flash ? 'bg-yellow-100' : ''}`}
        ref={onRef as any}
      >
        {value}
      </span>
      <input
        type="number"
        aria-label="Вес металла"
        inputMode="decimal"
        class="absolute inset-0 w-full h-full px-4 py-2 text-transparent caret-black focus:outline-none"
        min={0.5}
        step={0.5}
        value={value}
        style={{ width }}
        onInput$={handleInput}
      />
    </div>
  );
});