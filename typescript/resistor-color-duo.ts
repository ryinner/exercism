const COLORS = [
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

export function decodedValue(colors: string[]): number {
  return Number(
    colors.splice(0, 2).reduce((accumulator, color) => {
      const colorCode = COLORS.indexOf(color);
      if (colorCode === -1) {
        return accumulator;
      }
      return `${accumulator}${colorCode}`;
    }, "")
  );
}
