const DNA_TO_RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

function isValidDNACharacter(
  character: string
): character is keyof typeof DNA_TO_RNA {
  return character in DNA_TO_RNA;
}

export function toRna(dna: string): string {
  return dna.split("").reduce((resultString, character) => {
    if (isValidDNACharacter(character)) {
      const rna = DNA_TO_RNA[character];
      return resultString + rna;
    }
    throw new Error("Invalid input DNA.");
  }, "");
}
