import { component$ } from '@builder.io/qwik';

export interface AddressProps {
  address: {
    text: string;
    mapUrl: string;
  };
}

export const Address = component$<AddressProps>(({ address }) => {
  return (
    <address class="not-italic">
      <a
        href={address.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block hover:text-blue-700 transition"
      >
        📍 {address.text}
      </a>
    </address>
  );
});
