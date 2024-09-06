export function isIsogram(text: string): boolean {
  const characters = text.replace(/[\W]/gi, "").toLowerCase().split("");
  const uniqueValues: string[] = [];
  for (const character of characters) {
    if (uniqueValues.includes(character)) {
      return false;
    }
    uniqueValues.push(character);
  }
  return true;
}
