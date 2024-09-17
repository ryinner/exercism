export class Clock {
  private _hour: number = 0;
  private _minute: number = 0;

  constructor(hour: number, minute = 0) {
    const { hours, minutes } = this.parseMinutes(Math.abs(minute));
    if (minute < 0) {
      hour -= hours + 1;
      minute = 60 - minutes;
    } else {
      hour += hours;
      minute = minutes;
    }
    this._minute = minute;
    this.addHours(hour);
  }

  public toString(): string {
    const hours = this._hour < 10 ? `0${this._hour}` : `${this._hour}`;
    const minutes = this._minute < 10 ? `0${this._minute}` : `${this._minute}`;
    return `${hours}:${minutes}`;
  }

  public plus(rawMinutes: number): Clock {
    const { minutes, hours } = this.parseMinutes(this._minute + rawMinutes);
    this._minute = minutes;
    return this.addHours(hours);
  }

  public minus(rawMinutes: number): Clock {
    let { minutes, hours } = this.parseMinutes(
      Math.abs(this._minute - rawMinutes)
    );
    if (minutes === 0) {
      minutes = 0;
    } else {
      hours += 1;
      minutes = 60 - minutes;
    }
    this._minute = minutes;
    return this.addHours(-hours);
  }

  public equals(other: this): boolean {
    return this.toString() === other.toString();
  }

  private addHours(hours: number): Clock {
    this._hour += hours;
    if (this._hour < 0) {
      this._hour = 24 - Math.abs(this._hour % 24);
    } else if (this._hour >= 24) {
      this._hour = this._hour % 24;
    }
    if (this._hour === 24) {
      this._hour = 0;
    }
    return this;
  }

  private parseMinutes(minutes: number): { minutes: number; hours: number } {
    if (minutes >= 60) {
      return {
        hours: Math.floor(minutes / 60),
        minutes: minutes % 60,
      };
    }
    return {
      minutes,
      hours: 0,
    };
  }
}
