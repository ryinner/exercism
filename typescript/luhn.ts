export function valid(digitString: string): boolean {
  digitString = digitString.replace(/\s/g, "");
  if (digitString.length < 2 || !digitString.match(/^[0-9]+$/i)) {
    return false;
  }
  const digits = digitString.split("");

  const sum = [...digits].reduceRight((sum, digit, i) => {
    let digitCalculated = Number.parseInt(digit);
    if ((digitString.length - i) % 2 === 0) {
      digitCalculated *= 2;
    }
    if (digitCalculated > 9) {
      digitCalculated -= 9;
    }
    return sum + digitCalculated;
  }, 0);

  return sum % 10 === 0;
}
