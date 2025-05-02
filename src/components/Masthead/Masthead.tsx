import {
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import { metalOptions } from '~/utils/constants';

export interface MastheadProps {}

export const Masthead = component$<MastheadProps>(() => {
  const autoUpdateTimer = useSignal<ReturnType<typeof setInterval> | null>(
    null
  );

  const weight = useSignal('5');
  const selectedMetal = useSignal(metalOptions[0]?.label || '');
  const total = useSignal(0);
  const numberWidth = useSignal('auto');
  const selectWidth = useSignal('auto');
  const numberRef = useSignal<HTMLElement>();
  const selectRef = useSignal<HTMLElement>();

  const userTouchedWeight = useSignal(false);
  const userTouchedMetal = useSignal(false);

  const flashWeight = useSignal(false);
  const flashMetal = useSignal(false);
  const whatsappHref = useSignal('');

  // Счёт с рандомной дельтой
  useTask$(({ track }) => {
    track(() => weight.value);
    track(() => selectedMetal.value);

    const metal = metalOptions.find((m) => m.label === selectedMetal.value);
    const pricePerKg = metal?.price || 0;

    const numericWeight = parseFloat(weight.value || '0');
    const baseTotal = numericWeight * pricePerKg;
    const variation = 1 + (Math.random() * 0.06 - 0.03);
    total.value = Math.round(baseTotal * variation);

    let text = 'Здравствуйте! Хочу сдать металл. Можете рассчитать стоимость?';

    if (userTouchedWeight.value || userTouchedMetal.value) {
      text = `Здравствуйте! Хочу сдать ${weight.value} кг ${selectedMetal.value.toLowerCase()}. Можете рассчитать стоимость?`;
    }

    const encoded = encodeURIComponent(text);
    whatsappHref.value = `https://wa.me/79199947355?text=${encoded}`;
  });

  // Первичная генерация
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      const randomMetal =
        metalOptions[Math.floor(Math.random() * metalOptions.length)];
      selectedMetal.value = randomMetal.label;
      flashMetal.value = true;

      weight.value = (Math.round((Math.random() * 49 + 1) * 2) / 2).toString();
      flashWeight.value = true;

      setTimeout(() => {
        flashWeight.value = false;
        flashMetal.value = false;
      }, 1500);
    }, 8000);

    autoUpdateTimer.value = interval;

    return () => clearInterval(interval);
  });

  useVisibleTask$(({ track }) => {
    track(() => weight.value);
    if (numberRef.value) {
      numberWidth.value = `${numberRef.value.offsetWidth}px`;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => selectedMetal.value);
    if (selectRef.value) {
      selectWidth.value = `${selectRef.value.offsetWidth + 12}px`;
    }
  });

  useTask$(({ track }) => {
    const touchedWeight = track(() => userTouchedWeight.value);
    const touchedMetal = track(() => userTouchedMetal.value);

    if ((touchedWeight || touchedMetal) && autoUpdateTimer.value) {
      clearInterval(autoUpdateTimer.value);
      autoUpdateTimer.value = null;
    }
  });

  return (
    <section class="px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left">
      <h1 class="sr-only">Сдать металл на переработку — цена за кг</h1>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-6 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2]">
        <span>Сдать</span>

        <div
          class="relative inline-block align-middle"
          style={{ width: numberWidth.value }}
        >
          <span
            class={`inline-block px-4 py-2 bg-transparent tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${
              flashWeight.value ? 'bg-yellow-100' : ''
            }`}
            ref={numberRef}
          >
            {weight.value || 0}
          </span>
          <input
            type="text"
            inputMode="numeric"
            class="absolute inset-0 w-full h-full px-4 py-2 text-transparent caret-black focus:outline-none"
            pattern="\d*"
            min={0.5}
            step={0.5}
            value={weight.value}
            onInput$={(e) => {
              weight.value = (e.target as HTMLInputElement).value;
              userTouchedWeight.value = true;
            }}
            style={{ width: numberWidth.value }}
          />
        </div>

        <span>кг</span>

        <div
          class="relative inline-block align-middle"
          style={{ width: selectWidth.value }}
        >
          <span
            class={`inline-block px-4 py-2 bg-transparent tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${
              flashMetal.value ? 'bg-yellow-100' : ''
            }`}
            ref={selectRef}
          >
            {selectedMetal.value}
          </span>
          <select
            class="absolute inset-0 w-full h-full text-base font-normal opacity-0 cursor-pointer"
            bind:value={selectedMetal}
            onChange$={() => {
              userTouchedMetal.value = true;
            }}
          >
            {metalOptions.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <span>
          за{' '}
          <span class="text-red-500">
            {total.value.toLocaleString('ru-RU')}
          </span>{' '}
          ₽
        </span>
      </div>

      {/* Кнопки */}
      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="#form"
          class="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition"
        >
          Заполнить форму
        </a>

        <a
          href={whatsappHref.value}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-6 py-3 text-lg font-medium text-green-700 border-2 border-green-600 rounded-2xl hover:bg-green-50 transition"
        >
          Написать в WhatsApp
        </a>
      </div>

      <p class="mt-6 text-lg font-semibold text-gray-900">
        Получите максимальную цену, честное взвешивание и оплату сразу!
      </p>

      <p class="mt-2 text-sm text-gray-500">
        Расчёт приблизительный и не является публичной офертой.
      </p>
    </section>
  );
});
