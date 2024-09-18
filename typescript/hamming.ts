export function compute(left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  if (left === right) {
    return 0;
  }
  const leftCharacters = left.split("");
  const rightCharacters = right.split("");
  let differenceCounter = 0;
  for (let i = 0; i < leftCharacters.length; i++) {
    if (leftCharacters[i] !== rightCharacters[i]) {
      differenceCounter++;
    }
  }
  return differenceCounter;
}
