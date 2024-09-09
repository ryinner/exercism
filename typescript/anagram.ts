export class Anagram {
  private _anagramCharacters: Map<string, number>;
  private _anagram: string;

  constructor(input: string) {
    this._anagram = input.toLowerCase();
    this._anagramCharacters = this._anagram
      .split("")
      .reduce<Map<string, number>>((map, character) => {
        map.set(character, (map.get(character) ?? 0) + 1);
        return map;
      }, new Map());
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((potential) => {
      const potentialToLower = potential.toLowerCase();
      if (potential.length !== this._anagram.length) {
        return false;
      }
      if (this._anagram === potentialToLower) {
        return false;
      }
      const included: Map<string, number> = new Map();
      const match =
        potentialToLower.split("").find((character) => {
          if (!this._anagramCharacters.has(character)) {
            return true;
          }
          const includedValue = (included.get(character) ?? 0) + 1;
          if (includedValue > (this._anagramCharacters.get(character) ?? 0)) {
            return true;
          }
          included.set(character, includedValue);
          return false;
        }) === undefined;
      if (!match) {
        return false;
      }
      return true;
    });
  }
}
