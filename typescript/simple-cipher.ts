const CHARACTERS: string[] = [
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
] as const;

const { length: ALPHABET_LENGTH } = CHARACTERS;
const KEY_LENGTH = 100 as const;

export class SimpleCipher {
  public key: string;

  constructor(key?: string) {
    if (key === undefined) {
      key = this.generateKey();
    }
    this.key = key;
  }

  encode(text: string): string {
    const { length: keyLength } = this.key;
    return [...text].reduce((encoded, character, index) => {
      while (index >= keyLength) {
        index -= keyLength;
      }
      const key = this.key[index];
      const shiftValue = CHARACTERS.indexOf(key);
      const characterIndex = CHARACTERS.indexOf(character);
      let encodedIndex = characterIndex + shiftValue;
      if (encodedIndex >= ALPHABET_LENGTH) {
        encodedIndex -= ALPHABET_LENGTH;
      }
      const encodedCharacter = CHARACTERS[encodedIndex];

      return encoded + encodedCharacter;
    }, "");
  }

  decode(encoded: string): string {
    const { length: keyLength } = this.key;
    return [...encoded].reduce((decoded, character, index) => {
      while (index >= keyLength) {
        index -= keyLength;
      }
      const key = this.key[index];
      const shiftValue = CHARACTERS.indexOf(key);
      const characterIndex = CHARACTERS.indexOf(character);
      let decodedIndex = characterIndex - shiftValue;
      if (decodedIndex < 0) {
        decodedIndex = ALPHABET_LENGTH + decodedIndex;
      }
      const decodedCharacter = CHARACTERS[decodedIndex];
      return decoded + decodedCharacter;
    }, "");
  }

  private generateKey(): string {
    let key = "";
    for (let index = 0; index < KEY_LENGTH; index++) {
      key += CHARACTERS[Math.floor(Math.random() * ALPHABET_LENGTH)];
    }
    return key;
  }
}
