export function sum(magicalItems: number[], level: number): number {
  if (magicalItems.length === 0 || level <= 1) {
    return 0;
  }
  const setOfMultiplies = new Set<number>();
  for (const mi of magicalItems) {
    if (mi > level) {
      continue;
    }
    for (let index = 1; index < level; index++) {
      const multiple = mi * index;
      if (multiple >= level) {
        break;
      }
      setOfMultiplies.add(multiple);
    }
  }
  return Array.from(setOfMultiplies).reduce(
    (sum, multiple) => sum + multiple,
    0
  );
}
