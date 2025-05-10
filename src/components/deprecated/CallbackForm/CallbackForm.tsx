import { component$ } from '@builder.io/qwik';

export const CallbackForm = component$(() => {
  return (
    <section class="mt-24 px-4 max-w-xl mx-auto text-gray-900">
      <h2 class="text-3xl font-bold text-center mb-6">Заказать звонок</h2>
      <p class="text-center mb-8 text-gray-700">
        Оставьте свой номер — мы свяжемся с вами в ближайшее время.
      </p>
      <form
        id={'form'}
        name="callback"
        method="POST"
        data-netlify="true"
        class="bg-blue-50 rounded-2xl p-6 shadow-md space-y-4"
      >
        {/* скрытое поле для Netlify */}
        <input type="hidden" name="form-name" value="callback" />

        <input
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Ваше имя"
          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          autoComplete={'tel'}
          placeholder="Телефон"
          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          class="w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Заказать звонок
        </button>
      </form>
    </section>
  );
});
