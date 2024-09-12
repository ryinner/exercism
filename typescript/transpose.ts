export function transpose(strings: string[]): string[] {
  if (strings.length === 0) {
    return strings;
  }
  return strings.reduce<string[]>((transposed, string, stringIndex) => {
    const [stringWithMaxCharacter] = strings
      .slice(stringIndex)
      .sort((a, b) => b.length - a.length);
    const maxCharacterStringIndex = strings.indexOf(stringWithMaxCharacter);
    const { length: maxCharactersInString } = stringWithMaxCharacter;
    if (
      string.length < maxCharactersInString &&
      stringIndex < maxCharacterStringIndex
    ) {
      string = string + " ".repeat(maxCharactersInString - string.length);
    }
    [...string].forEach((character, characterIndex) => {
      if (transposed[characterIndex] !== undefined) {
        transposed[characterIndex] += character;
      } else {
        transposed[characterIndex] = character;
      }
    });
    return transposed;
  }, []);
}
