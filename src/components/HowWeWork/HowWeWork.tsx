import { component$ } from '@builder.io/qwik';
import { Level } from '~/components/Level';
import typo from 'ru-typo';
import { CTAButtons } from '~/components/CTAButtons';

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

  // Контакты для CTA
  const phoneHref = 'tel:+79199947355';
  const whatsappText = encodeURIComponent(
    'Здравствуйте! Я хочу сдать кабель. Можете, пожалуйста, рассчитать стоимость?',
  );

  const whatsappHref = `https://wa.me/79199947355?text=${whatsappText}`;

  return (
    <Level id="how-we-work" as="section" class="max-w-6xl mx-auto text-left">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        Как проходит приём кабеля
      </h2>

      {/* Используем flex-wrap для гармоничного ряда карточек */}
      <div class="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            class="relative bg-blue-50 rounded-2xl p-6 pt-12 flex flex-col items-start gap-4 text-left w-64"
          >
            {/* Номер шага */}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Иконка шага */}
            <div class="text-4xl mb-2">{step.icon}</div>

            {/* Заголовок шага */}
            <h3 class="text-xl font-semibold mb-1">{typo(step.title, { header: true })}</h3>

            {/* Описание шага */}
            <p class="text-base text-gray-600">{typo(step.desc, { digits: true })}</p>
          </div>
        ))}

        <CTAButtons phoneHref={phoneHref} whatsappHref={whatsappHref} />
      </div>
    </Level>
  );
});
