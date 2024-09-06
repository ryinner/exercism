export class Squares {
  private count;

  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let index = 1; index <= this.count; index++) {
      sum += index ** 2;
    }
    return sum;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let index = 1; index <= this.count; index++) {
      sum += index;
    }
    return sum ** 2;
  }

  get difference(): number {
    return Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}
