# Skuprum

[![Netlify Status](https://api.netlify.com/api/v1/badges/0a909843-3757-40a3-bf7b-a15569e830c1/deploy-status)](https://app.netlify.com/sites/skuprum/deploys)

**Skuprum** — одностраничный сайт для приёма металлолома в Москве.
Разработан с использованием [Qwik](https://qwik.builder.io/), TypeScript и Tailwind CSS.
Автоматический деплой осуществляется через [Netlify](https://www.netlify.com/).

## 🚀 Быстрый старт

```bash
git clone https://github.com/khizrim/skuprum
cd skuprum
pnpm install
pnpm dev
```

## 📁 Структура проекта

- `src/` — исходный код (страницы, компоненты, утилиты)
- `public/` — статические файлы (изображения, favicon и т.д.)
- `src/utils/constants.ts` — список цен на металлы
- `.github/` — CI/CD и настройки репозитория

## 🛠️ Скрипты

| Скрипт             | Назначение                             |
| ------------------ | -------------------------------------- |
| `pnpm dev`         | Запуск локального сервера разработки   |
| `pnpm build.types` | Проверка типов TypeScript              |
| `pnpm lint`        | Линтинг кода                           |
| `pnpm fmt`         | Форматирование кода с помощью Prettier |

## 💰 Обновление цен

Чтобы изменить цены на приём металла:

1. Откройте файл `src/utils/constants.ts`
2. Измените значения в массиве `metalOptions`, например:

```ts
export const metalOptions: MetalProps[] = [
  { label: 'меди', price: 777, image: '/images/copper.webp' },
  { label: 'кабеля', price: 666, image: '/images/cables.webp' },
  // ...
];
```

## 🚚 Деплой

1. Создайте новую ветку:

```bash
git checkout -b update-branch
```

2. Внесите изменения и зафиксируйте их:

```bash
git add .
git commit -m "Описание изменений"
git push origin update-branch
```

3. Создайте Pull Request в ветку `master`

После мержа PR автоматически запустится деплой на **Netlify**.

---
