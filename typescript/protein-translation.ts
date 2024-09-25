const STOP = "STOP";

const PROTEINS: Record<string, string> = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: STOP,
  UAG: STOP,
  UGA: STOP,
};

export function translate(input: string): string[] {
  const codons = input.split(/([A-Z]{0,3})/);
  const proteins: string[] = [];
  let hash: string[] = [];
  for (const c of codons) {
    if (c === "") {
      continue;
    }
    if (c in PROTEINS) {
      hash.splice(0);
      if (PROTEINS[c] === STOP) {
        break;
      }
      proteins.push(PROTEINS[c]);
    } else {
      throw new Error("Invalid codon");
    }
  }

  return proteins;
}
