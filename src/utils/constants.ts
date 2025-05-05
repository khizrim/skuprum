type MetalProps = {
  label: string;
  price: number;
  image?: string;
};

export const metalOptions: MetalProps[] = [
  { label: 'кабеля', price: 750, image: '/images/cables.png' },
  { label: 'меди', price: 800, image: '/images/copper.png' },
  { label: 'латуни', price: 480, image: '/images/brass.png' },
  { label: 'бронзы', price: 500, image: '/images/bronze.png' },
  { label: 'алюминия', price: 190, image: '/images/aluminium.png' },
  { label: 'нержавейки', price: 290, image: '/images/stainless.png' },
  { label: 'титана', price: 2400, image: '/images/titanium.png' },
  { label: 'олова', price: 2400, image: '/images/stannum.png' },
  { label: 'поса', price: 2300, image: '/images/pos.png' },
  { label: 'свинца', price: 120, image: '/images/lead.png' },
  { label: 'аккумуляторов', price: 65, image: '/images/battery.png' },
  { label: 'быстрореза', price: 1200, image: '/images/hss.png' },
  { label: 'нихрома', price: 1000, image: '/images/nichrome.png' },
  { label: 'тантала', price: 18000, image: '/images/tantalum.png' },
  { label: 'молибдена', price: 3750, image: '/images/molybdenum.png' },
  { label: 'вк/тк', price: 1750, image: '/images/tungsten.png' },
  { label: 'ниобия', price: 3800, image: '/images/niobium.png' },
  { label: 'кобальта', price: 1650, image: '/images/cobalt.png' },
  { label: 'висмута', price: 450, image: '/images/bismuth.png' },
  { label: 'бабита', price: 1900, image: '/images/babbitt.png' },
];
