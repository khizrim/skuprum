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

        <CTAButtons centered phoneHref={phoneHref} whatsappHref={whatsappHref} />
      </ul>
    </Level>
  );
});
