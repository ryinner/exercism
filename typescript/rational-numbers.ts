export class Rational {
  public numerator!: number;
  public denominator!: number;

  constructor(numerator: number, denominator: number) {
    this.set(numerator, denominator);
  }

  add(rational: this): this {
    const numerator =
      this.numerator * rational.denominator +
      rational.numerator * this.denominator;
    const denominator = this.denominator * rational.denominator;

    this.set(numerator, denominator);

    return this;
  }

  sub(rational: this): this {
    const numerator =
      this.numerator * rational.denominator -
      rational.numerator * this.denominator;
    const denominator = this.denominator * rational.denominator;

    this.set(numerator, denominator);

    return this;
  }

  mul(rational: this): this {
    const numerator = this.numerator * rational.numerator;
    const denominator = this.denominator * rational.denominator;

    this.set(numerator, denominator);

    return this;
  }

  div(rational: this): this {
    const numerator = this.numerator * rational.denominator;
    const denominator = rational.numerator * this.denominator;

    console.log(numerator, denominator);

    this.set(numerator, denominator);

    return this;
  }

  abs(): this {
    this.numerator = Math.abs(this.numerator);
    this.denominator = Math.abs(this.denominator);

    return this;
  }

  exprational(exponent: number): this {
    if (exponent === 0) {
      this.numerator = 1;
      this.denominator = 1;
      return this;
    }
    if (exponent < 0) {
      exponent = Math.abs(exponent);
      const numerator = this.denominator ** exponent;
      const denominator = this.numerator ** exponent;
      this.set(numerator, denominator);
    } else {
      const numerator = this.numerator ** exponent;
      const denominator = this.denominator ** exponent;
      this.set(numerator, denominator);
    }
    return this;
  }

  expreal(x: number): number {
    const xWithPower = this.power(x);
    const denominator = this.denominator / xWithPower.power;
    return xWithPower.number ** (this.numerator / denominator);
  }

  reduce(): this {
    return this;
  }

  private set(numerator: number, denominator: number): void {
    const gcd = this.gcd(Math.abs(numerator), Math.abs(denominator));
    if (denominator < 0) {
      if (numerator < 0) {
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
      } else {
        denominator = Math.abs(denominator);
        numerator *= -1;
      }
    }
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;
  }

  private power(x: number): { power: number; number: number } {
    const result = { power: 1, number: x };

    while (true) {
      const sqrt = Math.sqrt(result.number);
      if (Number.isInteger(sqrt)) {
        result.power++;
        result.number = sqrt;
      } else {
        break;
      }
    }
    return result;
  }

  private gcd(a: number, b: number): number {
    if (a === b && b === 0) {
      throw new Error("Cannot calculate for zero and zero");
    }
    let factor = 1;
    while (true) {
      if (a === 0) {
        return b;
      }
      if (b === 0) {
        return a;
      }
      if (a === 1 || b === 1) {
        return 1;
      }
      if (a === b) {
        return factor * a;
      }
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }
    }
  }
}
