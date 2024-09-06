type WordsCounter = Map<string, number>;

export function count(text: string): WordsCounter {
  return text.split(/[^A-Z0-9\_\']+/im).reduce<WordsCounter>((map, word) => {
    const preparedWord = word
      .trim()
      .toLowerCase()
      .replace(/^'+|'+$/gi, "");
    if (preparedWord.length > 0) {
      map.set(preparedWord, (map.get(preparedWord) ?? 0) + 1);
    }
    return map;
  }, new Map());
}
