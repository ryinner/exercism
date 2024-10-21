export class List<T> {
  public get items(): T[] {
    return this._items;
  }

  constructor(private _items: T[] = []) {}

  public append(list: List<T>): List<T> {
    this._items = [...this._items, ...list.items];
    return this;
  }

  public forEach(cb: (item: T) => void): void {
    for (const value of this._items) {
      cb(value);
    }
  }

  public concat(lists: List<List<T>>): List<T> {
    lists.forEach((list) => {
      this.append(list);
    });
    return this;
  }

  public length(): number {
    return this._items.length;
  }

  public filter(cb: (item: T) => boolean): List<T> {
    const filtered = new List<T>();
    for (const value of this._items) {
      if (cb(value)) {
        filtered.append(List.create(value));
      }
    }
    return filtered;
  }

  public map<R>(cb: (item: T) => R): List<R> {
    const mapped = new List<R>();
    for (const value of this._items) {
      mapped.append(List.create(cb(value)));
    }
    return mapped;
  }

  public foldl<A>(cb: (acc: A, item: T) => A, accumulator: A): A {
    this.forEach((i) => {
      accumulator = cb(accumulator, i);
    });
    return accumulator;
  }

  public foldr<A>(cb: (acc: A, item: T) => A, accumulator: A): A {
    for (let i = this.length(); i > 0; i--) {
      accumulator = cb(accumulator, this._items[i - 1]);
    }
    return accumulator;
  }

  public reverse(): List<T> {
    const revered = new List<T>();
    for (let i = this.length(); i > 0; i--) {
      revered.append(List.create(this._items[i - 1]));
    }
    return revered;
  }

  public static create<T>(...values: T[]): List<T> {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(values);
  }
}
