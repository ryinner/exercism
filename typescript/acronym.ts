export function parse(phrase: string): string {
  const words = phrase.split(/\-|\,?\s|\:/m);

  let acronym = "";
  for (const word of words) {
    if (word.match(/[A-Z]+$/)) {
      return word;
    }
    acronym += word.match(/[A-Z]/m)
      ? word.replace(/[a-z]+/gm, "").toUpperCase()
      : [...word][0].toUpperCase();
  }
  return acronym;
}
