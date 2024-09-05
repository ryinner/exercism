const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function isPangram(text: string): boolean {
  const alphabetInText = text
    .toLowerCase()
    .split("")
    .reduce<string[]>((alphabetInText, character) => {
      if (!alphabetInText.includes(character) && ALPHABET.includes(character)) {
        alphabetInText.push(character);
      }
      return alphabetInText;
    }, []);

  return alphabetInText.length === ALPHABET.length;
}
