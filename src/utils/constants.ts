import type { metalImages } from '~/components/MetalImage';

type MetalProps = {
  label: string;
  price: number;
  image?: string;
  name: keyof typeof metalImages;
};

export const WhatsappBaseUrl = `https://api.whatsapp.com/send/?phone=79199947355`;

export const metalOptions: MetalProps[] = [
  { label: 'меди', price: 777, image: '/images/copper.webp', name: 'copper' },
  { label: 'кабеля', price: 666, image: '/images/cables.webp', name: 'cables' },
  { label: 'латуни', price: 444, image: '/images/brass.webp', name: 'brass' },
  { label: 'бронзы', price: 555, image: '/images/bronze.webp', name: 'bronze' },
  { label: 'алюминия', price: 222, image: '/images/aluminium.webp', name: 'aluminium' },
  { label: 'банки', price: 88.8, image: '/images/can.webp', name: 'can' },
  { label: 'нержавейки', price: 55.5, image: '/images/stainless.webp', name: 'stainless' },
  { label: 'свинца', price: 111, image: '/images/lead.webp', name: 'lead' },
  { label: 'аккумулятора', price: 55.5, image: '/images/battery.webp', name: 'battery' },
  { label: 'металлолома', price: 33333, image: '/images/scrap.webp', name: 'scrap' },
  { label: 'титана', price: 200, image: '/images/titanium.webp', name: 'titanium' },
  { label: 'олова', price: 2700, image: '/images/stannum.webp', name: 'stannum' },
  { label: 'поса', price: 2600, image: '/images/pos.webp', name: 'pos' },
  { label: 'быстрореза', price: 400, image: '/images/hss.webp', name: 'hss' },
  { label: 'нихрома', price: 800, image: '/images/nichrome.webp', name: 'nichrome' },
  { label: 'тантала', price: 18000, image: '/images/tantalum.webp', name: 'tantalum' },
  { label: 'молибдена', price: 3750, image: '/images/molybdenum.webp', name: 'molybdenum' },
  { label: 'вк/тк', price: 1850, image: '/images/tungsten.webp', name: 'tungsten' },
  { label: 'ниобия', price: 3100, image: '/images/niobium.webp', name: 'niobium' },
  { label: 'кобальта', price: 950, image: '/images/cobalt.webp', name: 'cobalt' },
  { label: 'висмута', price: 600, image: '/images/bismuth.webp', name: 'bismuth' },
  { label: 'бабита', price: 1000, image: '/images/babbitt.webp', name: 'babbitt' },
];
