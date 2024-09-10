export function encode(text: string): string {
  if (text === "") {
    return text;
  }
  const hashMap = [...text].reduce<{ character: string; count: number }[]>(
    (hashMap, character) => {
      const lastHashMapElement = hashMap.at(-1);
      if (
        lastHashMapElement === undefined ||
        lastHashMapElement.character !== character
      ) {
        hashMap.push({ character, count: 1 });
      } else {
        lastHashMapElement.count++;
      }
      return hashMap;
    },
    []
  );

  return hashMap.reduce(
    (result, characterData) =>
      (result += `${characterData.count > 1 ? characterData.count : ""}${
        characterData.character
      }`),
    ""
  );
}

export function decode(encodedText: string): string {
  if (encodedText === "") {
    return encodedText;
  }
  const hashMap = [...encodedText].reduce<
    { character: string; count: number }[]
  >(
    (hashMap, character, index, characters) => {
      const lastHashMapElement = hashMap.at(-1);
      if (lastHashMapElement === undefined) {
        throw new Error("Reduce initial value is undefined");
      }
      if (!Number.isNaN(parseInt(character))) {
        lastHashMapElement.count = Number(
          `${lastHashMapElement.count}${character}`
        );
      } else {
        lastHashMapElement.character = character;
        if (lastHashMapElement.count === 0) {
          lastHashMapElement.count++;
        }
        if (index !== characters.length - 1) {
          hashMap.push({ character: "", count: 0 });
        }
      }
      return hashMap;
    },
    [{ character: "", count: 0 }]
  );
  return hashMap.reduce(
    (result, characterData) =>
      (result += `${characterData.character.repeat(characterData.count)}`),
    ""
  );
}
