type MetalProps = {
  label: string;
  price: number;
  image?: string;
};

export const WhatsappBaseUrl = `https://api.whatsapp.com/send/?phone=79199947355`;

export const metalOptions: MetalProps[] = [
  { label: 'меди', price: 777, image: '/images/copper.webp' },
  { label: 'кабеля', price: 666, image: '/images/cables.webp' },
  { label: 'латуни', price: 444, image: '/images/brass.webp' },
  { label: 'бронзы', price: 555, image: '/images/bronze.webp' },
  { label: 'алюминия', price: 222, image: '/images/aluminium.webp' },
  { label: 'банки', price: 88.8, image: '/images/can.webp' },
  { label: 'нержавейки', price: 55.5, image: '/images/stainless.webp' },
  { label: 'свинца', price: 111, image: '/images/lead.webp' },
  { label: 'аккумулятора', price: 55.5, image: '/images/battery.webp' },
  { label: 'металлолома', price: 33333, image: '/images/scrap.webp' },
  { label: 'титана', price: 200, image: '/images/titanium.webp' },
  { label: 'олова', price: 2700, image: '/images/stannum.webp' },
  { label: 'поса', price: 2600, image: '/images/pos.webp' },
  { label: 'быстрореза', price: 400, image: '/images/hss.webp' },
  { label: 'нихрома', price: 800, image: '/images/nichrome.webp' },
  { label: 'тантала', price: 18000, image: '/images/tantalum.webp' },
  { label: 'молибдена', price: 3750, image: '/images/molybdenum.webp' },
  { label: 'вк/тк', price: 1850, image: '/images/tungsten.webp' },
  { label: 'ниобия', price: 3100, image: '/images/niobium.webp' },
  { label: 'кобальта', price: 950, image: '/images/cobalt.webp' },
  { label: 'висмута', price: 600, image: '/images/bismuth.webp' },
  { label: 'бабита', price: 1000, image: '/images/babbitt.webp' },
];
