export function convert(number: number): string {
  const disabledByThree = number % 3 === 0;
  const disabledByFive = number % 5 === 0;
  const disabledBySeven = number % 7 === 0;
  if (!disabledByThree && !disabledByFive && !disabledBySeven) {
    return number.toString();
  }
  let result = "";
  if (disabledByThree) {
    result += "Pling";
  }
  if (disabledByFive) {
    result += "Plang";
  }
  if (disabledBySeven) {
    result += "Plong";
  }
  return result;
}
