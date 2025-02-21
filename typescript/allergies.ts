const ALLERGIES = [
  {
    weight: 1,
    name: "eggs",
  },
  {
    weight: 2,
    name: "peanuts",
  },
  {
    weight: 4,
    name: "shellfish",
  },
  {
    weight: 8,
    name: "strawberries",
  },
  {
    weight: 16,
    name: "tomatoes",
  },
  {
    weight: 32,
    name: "chocolate",
  },
  {
    weight: 64,
    name: "pollen",
  },
  {
    weight: 128,
    name: "cats",
  },
];

export class Allergies {
  private allergenBinary: string;

  constructor(allergenIndex: number) {
    this.allergenBinary = this.getBinary(allergenIndex);
  }

  public list(): string[] {
    return ALLERGIES.reduce<string[]>((list, a) => {
      if (this.allergicTo(a.name)) {
        list.push(a.name);
      }
      return list;
    }, []);
  }

  public allergicTo(allergen: string): boolean {
    const { weight = 0 } = ALLERGIES.find((a) => a.name === allergen) ?? {};
    if (weight === 0) {
      return false;
    }
    const bitPosition = this.getBinary(weight).indexOf("1");

    return this.allergenBinary[bitPosition] === "1";
  }

  private getBinary(index: number): string {
    let binary = index.toString(2);
    if (binary.length < ALLERGIES.length) {
      binary = "0".repeat(ALLERGIES.length - binary.length) + binary;
    } else if (binary.length > ALLERGIES.length) {
      binary = binary.slice(binary.length - ALLERGIES.length);
    }
    return binary;
  }
}
