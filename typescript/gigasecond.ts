export class Gigasecond {
  private _datePlusGigasecond: Date | undefined = undefined;

  constructor(private _date: Date) {}

  public date(): Date {
    if (this._datePlusGigasecond === undefined) {
      this._datePlusGigasecond = new Date(
        this._date.getTime() + 1_000_000_000_000
      );
    }
    return this._datePlusGigasecond;
  }
}
