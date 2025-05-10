type MetalProps = {
  label: string;
  price: number;
  image?: string;
};

export const metalOptions: MetalProps[] = [
  { label: 'меди', price: 800, image: '/images/copper.webp' },
  { label: 'кабеля', price: 750, image: '/images/cables.webp' },
  { label: 'латуни', price: 480, image: '/images/brass.webp' },
  { label: 'бронзы', price: 500, image: '/images/bronze.webp' },
  { label: 'алюминия', price: 190, image: '/images/aluminium.webp' },
  { label: 'нержавейки', price: 290, image: '/images/stainless.webp' },
  { label: 'титана', price: 2400, image: '/images/titanium.webp' },
  { label: 'олова', price: 2400, image: '/images/stannum.webp' },
  { label: 'поса', price: 2300, image: '/images/pos.webp' },
  { label: 'свинца', price: 120, image: '/images/lead.webp' },
  { label: 'аккумуляторов', price: 65, image: '/images/battery.webp' },
  { label: 'быстрореза', price: 1200, image: '/images/hss.webp' },
  { label: 'нихрома', price: 1000, image: '/images/nichrome.webp' },
  { label: 'тантала', price: 18000, image: '/images/tantalum.webp' },
  { label: 'молибдена', price: 3750, image: '/images/molybdenum.webp' },
  { label: 'вк/тк', price: 1750, image: '/images/tungsten.webp' },
  { label: 'ниобия', price: 3800, image: '/images/niobium.webp' },
  { label: 'кобальта', price: 1650, image: '/images/cobalt.webp' },
  { label: 'висмута', price: 450, image: '/images/bismuth.webp' },
  { label: 'бабита', price: 1900, image: '/images/babbitt.webp' },
];
