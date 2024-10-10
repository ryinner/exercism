const CIPHER = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};

export function encode(plainText: string): string {
  return [...plainText.toLowerCase().replace(/\,|\.|\s/gi, "")].reduce(
    (encoded, character, index) => {
      if (index > 0 && index % 5 === 0) {
        encoded += " ";
      }
      if (isEncodableCharacter(character)) {
        return (encoded += CIPHER[character]);
      }
      return (encoded += character);
    },
    ""
  );
}

export function decode(cipherText: string): string {
  return [...cipherText].reduce((decoded, character) => {
    if (isEncodableCharacter(character)) {
      return (decoded += CIPHER[character]);
    }
    if (character === " ") {
      return decoded;
    }
    return (decoded += character);
  }, "");
}

function isEncodableCharacter(
  character: string
): character is keyof typeof CIPHER {
  return Object.prototype.hasOwnProperty.call(CIPHER, character);
}
