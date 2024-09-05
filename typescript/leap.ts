export function isLeap(year: number) {
  const isDivisibleByFour = year % 4 === 0;
  const isDivisibleByOneHundred = year % 100 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;

  if (isDivisibleByOneHundred && !isDivisibleByFourHundred) {
    return false;
  }

  return isDivisibleByFour;
}
