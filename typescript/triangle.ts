export class Triangle {
  private sides: Set<number>;
  private isTriangle = false;

  constructor(...sides: number[]) {
    this.sides = new Set(sides);
    const [a, b, c] = sides;
    if (!this.sides.has(0) && a + b >= c && b + c >= a && c + a >= b) {
      this.isTriangle = true;
    }
    console.log(a + b, c);
  }

  get isEquilateral(): boolean {
    return this.sides.size === 1 && this.isTriangle;
  }

  get isIsosceles(): boolean {
    return this.sides.size <= 2 && this.isTriangle;
  }

  get isScalene(): boolean {
    return this.sides.size === 3 && this.isTriangle;
  }
}
