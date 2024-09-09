const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export class Robot {
  public static ReleasesNames = new Set<string>();

  private _name: string = "";

  constructor() {}

  public get name(): string {
    if (this._name === "") {
      this._name = Robot.releaseNames();
    }
    return this._name;
  }

  public resetName(): void {
    this._name = "";
  }

  public static releaseNames(): string {
    const nameArrays = [LETTERS, LETTERS, DIGITS, DIGITS, DIGITS];
    let result!: string;
    while (result === undefined) {
      const name = nameArrays.reduce(
        (name, array) => name + Robot.getRandomFromArray(array),
        ""
      );
      if (this.ReleasesNames.has(name)) {
        continue;
      }
      this.ReleasesNames.add(name);
      result = name;
    }
    return result;
  }

  private static getRandomFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
