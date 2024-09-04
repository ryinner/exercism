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

export function decodedResistorValue([first, second, third]: string[]): string {
  const firstCode = COLORS.indexOf(first);
  const secondCode = COLORS.indexOf(second);
  let zerosCount = COLORS.indexOf(third);

  if (firstCode === -1) {
    throw new Error(`Unknown color ${first}`);
  }
  if (secondCode === -1) {
    throw new Error(`Unknown color ${second}`);
  }
  if (zerosCount === -1) {
    throw new Error(`Unknown color ${third}`);
  }
  let number = firstCode;

  if (secondCode === 0) {
    zerosCount++;
  } else {
    number = Number(`${number}${secondCode}`);
  }
  let result = number.toString();

  if ([1, 4, 7, 10].includes(zerosCount)) {
    zerosCount--;
    if (result !== "0") {
      result += "0";
    }
  }

  let prefix = "";
  switch (zerosCount) {
    case 3:
      prefix = "kilo";
      break;
    case 6:
      prefix = "mega";
      break;
    case 9:
      prefix = "giga";
      break;
  }

  return `${result} ${prefix}ohms`;
}
