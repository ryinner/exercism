const center = [0, 0];
const INNER_RADIUS = 1;
const MIDDLE_RADIUS = 5;
const OUTER_RADIUS = 10;

export function score(x: number, y: number): number {
  if (isDotInCircle([...center, INNER_RADIUS], [x, y])) {
    return 10;
  }
  if (isDotInCircle([...center, MIDDLE_RADIUS], [x, y])) {
    return 5;
  }
  if (isDotInCircle([...center, OUTER_RADIUS], [x, y])) {
    return 1;
  }
  return 0;
}

function isDotInCircle(
  [centerX, centerY, radius]: number[],
  [dotX, dotY]: number[]
): boolean {
  return (dotX - centerX) ** 2 + (dotY - centerY) ** 2 <= radius ** 2;
}
