export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function colorCode(color: string): number {
  const colorNumber = COLORS.indexOf(color);
  if (colorNumber === -1) {
    throw new Error(`Unknown color: ${color}`);
  }
  return colorNumber;
}
