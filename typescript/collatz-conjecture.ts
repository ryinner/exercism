export function steps(count: number): number {
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error("Only positive integers are allowed");
  }
  let steps = 0;
  while (count > 1) {
    steps++;
    const isEven = count % 2 === 0;
    if (isEven) {
      count /= 2;
    } else {
      count *= 3;
      count++;
    }
  }
  return steps;
}
