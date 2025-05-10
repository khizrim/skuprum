import { component$ } from '@builder.io/qwik';
import typo from 'ru-typo';

export const HowWeWork = component$(() => {
  const steps = [
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

  return (
    <section class="px-4 py-8 sm:px-6 lg:px-12 max-w-6xl mx-auto text-left">
      <h2 class="text-4xl font-bold text-center mb-16">
        Как проходит приём кабеля
      </h2>

      <div class="flex flex-col flex-wrap lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto relative">
        {steps.map((step, index) => (
          <div
            key={index}
            class="relative bg-blue-50 rounded-2xl px-6 py-8 text-center w-full min-w-[300px] max-w-[260px] h-[300px] flex flex-col justify-center items-center text-wrap"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <div class="text-5xl mb-4">{step.icon}</div>
              <h3 class="text-xl font-semibold mb-2">
                {typo(step.title, { header: true })}
              </h3>
              <p class="text-base text-gray-700">
                {typo(step.desc, { digits: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
