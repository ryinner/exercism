export class CustomSet {
  private _elements: number[] = [];

  constructor(initial: number[] = []) {
    const add = this.add.bind(this);
    initial.forEach(add);
  }

  get length(): number {
    return this._elements.length;
  }

  values() {
    return this._elements;
  }

  empty(): boolean {
    return this.length === 0;
  }

  contains(element: number): boolean {
    for (const el of this.values()) {
      if (el === element) {
        return true;
      }
    }
    return false;
  }

  add(element: number): CustomSet {
    if (!this.contains(element)) {
      this._elements.push(element);
    }
    return this;
  }

  subset(other: CustomSet): boolean {
    if (this.empty()) {
      return true;
    }
    for (const el of this.values()) {
      if (!other.contains(el)) {
        return false;
      }
    }
    return true;
  }

  disjoint(other: CustomSet): boolean {
    if (other.empty() || this.empty()) {
      return true;
    }
    for (const el of this.values()) {
      if (other.contains(el)) {
        return false;
      }
    }
    return true;
  }

  eql(other: CustomSet): boolean {
    if (this.empty() && other.empty()) {
      return true;
    }
    if (this.length === other.length) {
      return this.subset(other);
    }
    return false;
  }

  union(other: CustomSet): CustomSet {
    if (other.empty()) {
      return this;
    }
    const add = this.add.bind(this);
    other.values().forEach(add);
    return this;
  }

  intersection(other: CustomSet): CustomSet {
    if (other.empty()) {
      return other;
    }
    if (this.empty()) {
      return this;
    }
    const intersection = new CustomSet();
    for (const el of other.values()) {
      if (this.contains(el)) {
        intersection.add(el);
      }
    }
    return intersection;
  }

  difference(other: CustomSet): CustomSet {
    if (this.empty()) {
      return this;
    }
    if (other.empty()) {
      return this;
    }
    const difference = new CustomSet();
    for (const el of this.values()) {
      if (!other.contains(el)) {
        difference.add(el);
      }
    }
    return difference;
  }
}
