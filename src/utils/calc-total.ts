export const calculateTotal = (
  weight: number,
  pricePerKg: number,
  options: {
    variation?: boolean;
    variationPercent?: number;
  } = {},
): number => {
  const base = weight * pricePerKg;
  if (options.variation) {
    const range = options.variationPercent ?? 0.03;
    const factor = 1 + (Math.random() * 2 * range - range);
    return Math.round(base * factor);
  }
  return Math.round(base);
};
