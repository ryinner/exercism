enum NucleotideCharacters {
  A = "A",
  C = "C",
  G = "G",
  T = "T",
}
type NucleotidesMap = Record<NucleotideCharacters, number>;

export function nucleotideCounts(dna: string): NucleotidesMap {
  if (dna.length > 0 && !dna.match(/^[A|C|G|T]+$/)) {
    throw new Error("Invalid nucleotide in strand");
  }
  return (<NucleotideCharacters[]>[...dna]).reduce(
    (nucleotidesMap, nucleotide) => {
      nucleotidesMap[nucleotide]++;
      return nucleotidesMap;
    },
    { A: 0, C: 0, G: 0, T: 0 }
  );
}
