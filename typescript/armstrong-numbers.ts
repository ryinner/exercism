export function isArmstrongNumber(number: number | bigint): boolean {
  const numberSplitted = number.toString().split("");
  const powModifier = numberSplitted.length;
  const isBigInt = typeof number === "bigint";
  const powedNumber = numberSplitted.reduce<bigint | number>((sum, number) => {
    if (isBigInt) {
      return BigInt(sum) + BigInt(number) ** BigInt(powModifier);
    } else {
      return Number(sum) + Number(number) ** Number(powModifier);
    }
  }, 0);
  return powedNumber === number;
}
