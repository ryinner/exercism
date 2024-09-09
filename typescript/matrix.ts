export class Matrix {
  private _matrix: number[][] = [];

  constructor(matrix: string) {
    this._matrix = matrix.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this._matrix;
  }

  get columns(): number[][] {
    const result: number[][] = [];
    for (let x = 0; x < this._matrix.length; x++) {
      const row = this._matrix[x];
      for (let y = 0; y < row.length; y++) {
        if (!Array.isArray(result[y])) {
          result[y] = [];
        }
        result[y][x] = this._matrix[x][y];
      }
    }
    return result;
  }
}
