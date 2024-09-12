export class Series {
  private _series;

  constructor(series: string) {
    if (series.trim().length === 0) {
      throw new Error("series cannot be empty");
    }
    this._series = series;
  }

  slices(sliceLength: number): number[][] {
    this.validation(sliceLength);

    const tokens = this._series.length - sliceLength + 1;
    if (tokens === 1) {
      return [[...this._series].map(Number)];
    }

    let i = 0;
    const result = [];
    while (i < tokens) {
      result.push([...this._series.slice(i, i + sliceLength)].map(Number));
      i++;
    }

    return result;
  }

  private validation(sliceLength: number): void {
    if (sliceLength > this._series.length) {
      throw new Error("slice length cannot be greater than series length");
    }
    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    }
    if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");
    }
  }
}
