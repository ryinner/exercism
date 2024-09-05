const PLATENS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const SECONDS_IN_YEAR = 31_557_600;

export function age(planet: keyof typeof PLATENS, seconds: number): number {
  const earthYears = seconds / SECONDS_IN_YEAR;

  const planetModifier = PLATENS[planet];

  return Number((earthYears / planetModifier).toFixed(2));
}
