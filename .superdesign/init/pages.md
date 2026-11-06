# Pages

## / (Home)
Entry: src/routes/index.tsx (layout src/routes/layout.tsx → Header, Main, Footer)
Dependencies:
- src/components/Masthead/Masthead.tsx
  - src/components/Masthead/Masthead.types.ts
- src/components/WhatWeAccept/WhatWeAccept.tsx
  - src/components/WhatWeAccept/WhatWeAccept.constants.ts
- src/components/OurApproach/OurApproach.tsx
- src/components/WhyChooseUs/WhyChooseUs.tsx
  - src/components/WhyChooseUs/WhyChooseUs.constants.tsx
- src/components/MapWithLocation/MapWithLocation.tsx
- src/components/HowWeWork/HowWeWork.tsx
  - src/components/HowWeWork/HowWeWork.constants.ts
- src/components/YandexReviews/YandexReviews.tsx
  - (Masthead also uses) src/components/Level/Level.tsx, src/components/MetalImage/MetalImage.tsx, src/components/CTAButtons/CTAButtons.tsx, src/prices/catalog.ts, src/utils/calc-total.ts

## Section sources

### `src/components/WhatWeAccept/WhatWeAccept.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { acceptItems } from '~/components/WhatWeAccept/WhatWeAccept.constants';

export interface AcceptItem {
  icon: string;
  title: string;
  description: string;
}

export const WhatWeAccept = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto py-16 text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
        {typo('Что вы можете сдать нам', { header: true })}
      </h2>
      <p class="text-lg sm:text-xl text-gray-600 mb-12">
        {typo(
          'Мы принимаем цветной и чёрный металлолом в любом виде — оплачиваем дорого, взвешиваем честно. От 1 кг до оптовых партий.',
          { digits: true },
        )}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        {acceptItems.map((item) => (
          <div class="flex items-start gap-6" key={item.title}>
            <span class="text-4xl sm:text-5xl">{item.icon}</span>
            <div>
              <div class="text-xl sm:text-2xl font-semibold">{typo(item.title)}</div>
              <div class="text-base sm:text-lg text-gray-500">{typo(item.description)}</div>
            </div>
          </div>
        ))}
      </div>
    </Level>
  );
});
```

### `src/components/WhatWeAccept/WhatWeAccept.constants.ts`
```tsx
import type { AcceptItem } from '~/components/WhatWeAccept/WhatWeAccept';

export const acceptItems: AcceptItem[] = [
  {
    icon: '🔌',
    title: 'Кабель в изоляции',
    description: 'Любые объёмы и сечения.',
  },
  {
    icon: '🟠',
    title: 'Медь',
    description: 'Блеск, кусок, микс, луженная. Высокая цена.',
  },
  {
    icon: '⚙️',
    title: 'Чермет',
    description: 'Строительный и промышленный лом.',
  },
  {
    icon: '🔋',
    title: 'Аккумуляторы',
    description: 'Свинцовые, автомобильные, ИБП.',
  },
  {
    icon: '🟡',
    title: 'Латунь',
    description: 'Микс, кусковая, радиаторы, бойлерная трубка, стружка.',
  },
  {
    icon: '🥫',
    title: 'Алюминий',
    description:
      'Эл-тех, профиль, микс, диски, пищевой, моторный, офсет, банка, радиаторы, стружка.',
  },
];
```

### `src/components/OurApproach/OurApproach.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import typo from 'ru-typo';

export const OurApproach = component$(() => {
  return (
    <section class="max-w-5xl mx-auto text-gray-900">
      <div class="bg-gray-100 rounded-3xl p-10 relative">
        <div class="absolute top-[-30px] left-[-20px] text-[100px] text-blue-600 opacity-10 select-none leading-none">
          “
        </div>
        <p class="text-3xl font-bold mb-6 text-center">
          {typo('Мы работаем по-честному. Не на словах — на деле.', {
            header: true,
          })}
        </p>

        <p class="text-xl leading-relaxed text-center max-w-3xl mx-auto text-gray-800">
          {typo(
            'Мы не занижаем вес. Не скрываем удержаний. Приезжаем, взвешиваем, платим — и всё по-честному. Это не маркетинг. Это принцип. Мы зарабатываем честно — и к вам относимся так же.',
          )}
        </p>
      </div>
    </section>
  );
});
```

### `src/components/WhyChooseUs/WhyChooseUs.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { chooseItems } from '~/components/WhyChooseUs/WhyChooseUs.constants';

export interface ChooseItem {
  icon: string;
  title: string;
  description: string;
}

export const WhyChooseUs = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-8 text-gray-900">
        {typo('Почему нас выбирают клиенты', { header: true })}
      </h2>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-y-12 list-none p-0 m-0">
        {chooseItems.map((item) => (
          <li
            class="flex flex-col items-start gap-2 sm:gap-6 py-6 bg-white rounded-2xl"
            key={item.title}
          >
            <div class="text-4xl sm:text-5xl">{item.icon}</div>
            <p class="text-xl sm:text-2xl font-semibold m-0">{typo(item.title)}</p>
            <p
              class="text-base sm:text-lg text-gray-500 m-0"
              dangerouslySetInnerHTML={typo(item.description)}
            />
          </li>
        ))}
      </ul>
    </Level>
  );
});
```

### `src/components/WhyChooseUs/WhyChooseUs.constants.tsx`
```tsx
import type { ChooseItem } from '~/components/WhyChooseUs/index';

export const chooseItems: ChooseItem[] = [
  {
    icon: '💰',
    title: 'Максимальные цены',
    description:
      'До <strong class="text-gray-900">777 ₽</strong> за кг медного кабеля — честно, без скрытых удержаний.',
  },
  {
    icon: '🚚',
    title: 'Быстрый вывоз',
    description:
      'Вывозим <strong class="text-gray-900">цветмет от 50 кг</strong> и <strong class="text-gray-900">чермет от 500 кг</strong> в день заявки.',
  },
  {
    icon: '⚖️',
    title: 'Честное взвешивание',
    description: 'Электронные весы, видеофиксация по запросу.',
  },
  {
    icon: '💳',
    title: 'Оплата сразу',
    description: 'Наличными или переводом за 5 минут после приёма.',
  },
];
```

### `src/components/MapWithLocation/MapWithLocation.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';

interface Location {
  label: string;
  metro: string;
  link: string;
}

const locations: Location[] = [
  {
    label: 'г. Москва, ул. Смольная д. 2',
    metro: 'м. Водный стадион',
    link: 'https://yandex.ru/maps/?rtext=~55.844624,37.502101&rtt=auto',
  },
  {
    label: 'г. Москва, Остаповский проезд д. 4 стр. 2',
    metro: 'м. Угрешская',
    link: 'https://yandex.ru/maps/?rtext=~55.719817,37.704367&rtt=auto',
  },
];

export const MapWithLocation = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        {typo('Наши пункты приёма')}
      </h2>

      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-12 list-none p-0 m-0">
        {locations.map((loc, idx) => (
          <li key={idx} class="flex flex-col bg-white rounded-2xl shadow-lg p-6 gap-6">
            <div class="flex items-start gap-4">
              <span class="text-2xl mt-1">📍</span>
              <div>
                <p class="text-xl sm:text-2xl font-semibold text-gray-900 m-0">{typo(loc.label)}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-lg text-gray-500">🚇</span>
                  <p class="text-base text-gray-600 m-0">{typo(loc.metro)}</p>
                </div>
              </div>
            </div>
            <a
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              class="mt-auto block w-full text-center px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              {typo('Построить маршрут')}
            </a>
          </li>
        ))}
      </ul>
    </Level>
  );
});
```

### `src/components/HowWeWork/HowWeWork.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { CTAButtons } from '~/components/CTAButtons';
import { steps } from '~/components/HowWeWork/HowWeWork.constants';
import { WhatsappBaseUrl } from '~/utils/constants';

export const HowWeWork = component$(() => {
  const phoneHref = 'tel:+79199947355';
  const whatsappText = encodeURIComponent(
    'Здравствуйте! Я хочу сдать кабель. Можете, пожалуйста, рассчитать стоимость?',
  );

  const whatsappHref = `${WhatsappBaseUrl}&text=${whatsappText}&type=phone_number&app_absent=0`;

  return (
    <Level id="how-we-work" as="section" class="max-w-6xl mx-auto text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        {typo('Как проходит приём кабеля', { header: true })}
      </h2>

      <ul class="flex flex-wrap justify-center items-stretch gap-8 list-none p-0 m-0">
        {steps.map((step, index) => (
          <li
            key={index}
            class="relative bg-blue-50 rounded-2xl p-6 pt-12 flex flex-col justify-start items-start gap-4 text-left flex-1 min-w-[16rem]"
          >
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div class="text-4xl mb-2">{step.icon}</div>

            <p class="text-xl font-semibold mb-1 m-0">{typo(step.title, { header: true })}</p>

            <p class="text-base text-gray-600 m-0">{typo(step.desc, { digits: true })}</p>
          </li>
        ))}
      </ul>

      <CTAButtons centered phoneHref={phoneHref} whatsappHref={whatsappHref} />
    </Level>
  );
});
```

### `src/components/HowWeWork/HowWeWork.constants.ts`
```tsx
export const steps = [
  {
    icon: '💬',
    title: 'Согласуем цену',
    desc: 'Присылаете фото или описание — мы фиксируем цену заранее.',
  },
  {
    icon: '🚚️',
    title: 'Привозите или вызываете',
    desc: 'Можно привезти металл на точку или заказать вывоз от 50 кг.',
  },
  {
    icon: '⚖️',
    title: 'Взвешиваем на месте',
    desc: 'Электронные весы. Вес подтверждаем вместе с вами.',
  },
  {
    icon: '💸',
    title: 'Оплата сразу',
    desc: 'Наличными или переводом. Без задержек и удержаний.',
  },
  {
    icon: '📑',
    title: 'Документы по запросу',
    desc: 'Акт, накладная, договор — всё официально и прозрачно.',
  },
];
```

### `src/components/YandexReviews/YandexReviews.tsx`
```tsx
import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';

export const YandexReviews = component$(() => {
  return (
    <Level as="section" class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10">
        Что о нас говорят клиенты
      </h2>

      <div class="w-full max-w-3xl mx-auto">
        <iframe
          class="w-full h-[600px] md:h-[800px] rounded-2xl shadow-lg border-none"
          src="https://yandex.ru/maps-reviews-widget/192246959819?comments"
          title="Отзывы на Яндекс.Картах"
          loading="lazy"
          referrerPolicy={'no-referrer'}
          data-cookiescript="accepted"
          data-cookiecategory="strict"
          sandbox="allow-scripts"
          seamless
        />
      </div>

      <a
        href="https://yandex.ru/maps/org/CvetMetLom/192246959819/"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-6 text-sm text-gray-600 hover:text-gray-800 transition"
      >
        Пункт приёма на карте Москвы — Яндекс.Карты
      </a>
    </Level>
  );
});
```

### `src/components/Masthead/Masthead.tsx`
```tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Level } from '~/components/Level/Level';
import { WhatsappBaseUrl } from '~/utils/constants';
import { metalIds, metals } from '~/prices/catalog';
import { MetalImage } from '~/components/MetalImage/MetalImage';
import typo from 'ru-typo';
import { calculateTotal } from '~/utils/calc-total';
import { CTAButtons } from '~/components/CTAButtons';
import type { MastheadProps } from './Masthead.types';

const metalOptions = metalIds.map((name) => ({ name, label: metals[name].label }));

export const Masthead = component$<MastheadProps>((props) => {
  // 1. Серверная инициализация
  const defaultWeight = 5;
  const defaultMetalLabel = metalOptions[0]?.label || '';
  const initialTotal = props.prices ? calculateTotal(defaultWeight, props.prices.copper, { variation: false }) : 0;

  // 2. Сигналы состояния
  const autoUpdateTimer = useSignal<ReturnType<typeof setInterval> | null>(null);
  const weight = useSignal(defaultWeight.toString());
  const selectedMetal = useSignal(defaultMetalLabel);
  const total = useSignal(initialTotal);

  const numberWidth = useSignal('auto');
  const selectWidth = useSignal('auto');
  const numberRef = useSignal<HTMLElement>();
  const selectRef = useSignal<HTMLElement>();

  const userTouchedWeight = useSignal(false);
  const userTouchedMetal = useSignal(false);

  const flashWeight = useSignal(false);
  const flashMetal = useSignal(false);
  const whatsappHref = useSignal('');

  // Флаг первого client-side выполнения (resumability)
  const firstClientRun = useSignal(true);

  // 3. Расчёт total и формирование WhatsApp-ссылки
  useVisibleTask$(({ track }) => {
    track(() => weight.value);
    track(() => selectedMetal.value);
    track(() => props.prices);

    const w = parseFloat(weight.value) || 0;
    const metal = metalOptions.find((option) => option.label === selectedMetal.value);
    const price = metal && props.prices ? props.prices[metal.name] : 0;

    if (firstClientRun.value) {
      firstClientRun.value = false;
      // повторяем серверный расчёт — без вариации
      total.value = calculateTotal(w, price, { variation: false });
    } else {
      // дальнейшие — с вариацией ±3%
      total.value = calculateTotal(w, price, {
        variation: true,
        variationPercent: 0.03,
      });
    }

    const defaultText = 'Здравствуйте! Хочу сдать металл. Можете рассчитать стоимость?';
    const customText =
      userTouchedWeight.value || userTouchedMetal.value
        ? `Здравствуйте! Хочу сдать ${weight.value} кг ${selectedMetal.value.toLowerCase()}. Можете рассчитать стоимость?`
        : defaultText;

    whatsappHref.value = `${WhatsappBaseUrl}&text=${encodeURIComponent(customText)}&type=phone_number&app_absent=0`;
  });

  // 4. Авто-обновление каждые 8 секунд
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      const randomMetal = metalOptions[Math.floor(Math.random() * metalOptions.length)];
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

  // 5. Подгон ширины плашек под содержимое
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

  // 6. Остановка интервала при ручном вводе пользователем
  useVisibleTask$(({ track }) => {
    const touched = track(() => userTouchedWeight.value) || track(() => userTouchedMetal.value);
    if (touched && autoUpdateTimer.value) {
      clearInterval(autoUpdateTimer.value);
      autoUpdateTimer.value = null;
    }
  });

  return (
    <Level as="section" class="relative mx-auto w-full">
      <h1 class="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
        Прием черного и цветного металла в Москве — самовывоз и выгодные цены
      </h1>

      <div class="flex flex-col lg:flex-row items-center lg:items-start">
        <div class="flex relative sm:hidden sm:absolute top-0 right-0 lg:transform lg:-translate-y-20 lg:translate-x-1/3 w-full aspect-square lg:w-2/3 lg:block">
          <MetalImage
            metal={metalOptions.find((m) => m.label === selectedMetal.value)?.name || 'copper'}
          />
        </div>

        <div class="w-full lg:w-3/5">
          <div
            class="flex flex-wrap items-center gap-x-4 gap-y-6
                   text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1]"
          >
            <span>Сдать</span>

            {/* Вес */}
            <div class="relative inline-block align-middle" style={{ width: numberWidth.value }}>
              <span
                class={`inline-block px-4 py-2 bg-transparent tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${flashWeight.value ? 'bg-yellow-100' : ''}`}
                ref={numberRef}
              >
                {weight.value || 0}
              </span>
              <input
                type="text"
                name="weight"
                aria-label="Вес металла"
                inputMode="numeric"
                class="absolute inset-0 w-full h-full px-4 py-2
                       text-transparent caret-black focus:outline-none"
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

            {/* Вид металла */}
            <div class="relative inline-block align-middle" style={{ width: selectWidth.value }}>
              <span
                class={`inline-block px-4 py-2 bg-transparent tracking-tight outline-4 outline-dashed rounded-2xl outline-blue-700 whitespace-nowrap transition duration-300 ${flashMetal.value ? 'bg-yellow-100' : ''}`}
                ref={selectRef}
              >
                {selectedMetal.value}
              </span>
              <select
                aria-label="Вид металла"
                name="type"
                class="absolute inset-0 w-full h-full text-base font-normal
                       opacity-0 cursor-pointer"
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

            {/* Итоговая цена */}
            <span>
              {props.prices ? <>до <span class="text-red-500">{total.value.toLocaleString('ru-RU')}</span> ₽</> : <span>Цену уточните по телефону</span>}
            </span>
          </div>

          {/* Кнопки */}
          <CTAButtons phoneHref="tel:+79199947355" whatsappHref={whatsappHref.value} />

          {/* Описание */}
          <p class="mt-6 text-xl sm:text-3xl sm:leading-normal font-semibold text-gray-900">
            {typo('Получите максимальную цену, честное взвешивание и оплату сразу!')}
          </p>
          <p class="mt-2 text-sm text-gray-500">
            {typo(
              'Расчёт приблизительный и не является публичной офертой. Точный расчет возможен только после оценки',
            )}
          </p>
        </div>
      </div>
    </Level>
  );
});
```

### `src/prices/catalog.ts`
```tsx
export const metals = {
  copper: { title: 'Медь', label: 'меди' },
  cables: { title: 'Кабель', label: 'кабеля' },
  brass: { title: 'Латунь', label: 'латуни' },
  bronze: { title: 'Бронза', label: 'бронзы' },
  aluminium: { title: 'Алюминий', label: 'алюминия' },
  can: { title: 'Алюминиевая банка', label: 'банки' },
  stainless: { title: 'Нержавейка', label: 'нержавейки' },
  lead: { title: 'Свинец', label: 'свинца' },
  battery: { title: 'Аккумулятор', label: 'аккумулятора' },
  scrap: { title: 'Металлолом', label: 'металлолома' },
  titanium: { title: 'Титан', label: 'титана' },
  stannum: { title: 'Олово', label: 'олова' },
  pos: { title: 'ПОС', label: 'поса' },
  hss: { title: 'Быстрорез', label: 'быстрореза' },
  nichrome: { title: 'Нихром', label: 'нихрома' },
  tantalum: { title: 'Тантал', label: 'тантала' },
  molybdenum: { title: 'Молибден', label: 'молибдена' },
  tungsten: { title: 'ВК/ТК', label: 'вк/тк' },
  niobium: { title: 'Ниобий', label: 'ниобия' },
  cobalt: { title: 'Кобальт', label: 'кобальта' },
  bismuth: { title: 'Висмут', label: 'висмута' },
  babbitt: { title: 'Баббит', label: 'бабита' },
};

export const isMetalId = (value: string): value is keyof typeof metals =>
  Object.hasOwn(metals, value);

export const metalIds = Object.keys(metals).filter(isMetalId);
```
