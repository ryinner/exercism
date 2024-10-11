export class LinkedList<TElement> {
  private head?: Node<TElement>;
  private tail?: Node<TElement>;
  private length: number = 0;

  public push(element: TElement): void {
    const node = new Node(element);
    if (this.tail === undefined || this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      node.setPrev(this.tail);
      this.tail.setNext(node);
      this.tail = node;
    }
    this.length++;
  }

  public pop(): TElement | undefined {
    if (this.head === undefined) {
      return undefined;
    }
    let current = this.head;
    let previous = this.head;
    while (current.getNext() !== undefined) {
      previous = current;
      current = current.getNext() as Node<TElement>;
    }
    previous.setNext(undefined);
    this.tail = previous;
    this.length--;
    if (this.length === 0) {
      this.head = undefined;
      this.tail = undefined;
    }
    return current.value;
  }

  public shift(): TElement | undefined {
    if (this.head === undefined) {
      return undefined;
    }
    const current = this.head;
    this.head = current.getNext();
    this.length--;
    return current.value;
  }

  public unshift(element: TElement): void {
    if (this.head === undefined) {
      return this.push(element);
    }
    const node = new Node(element);
    node.setNext(this.head);
    this.head.setPrev(node);
    this.head = node;
    this.length++;
  }

  public delete(element: TElement): void {
    if (this.count() === 0) {
      return;
    }
    let current = this.head;
    let previous = this.head;
    while (current !== undefined) {
      if (current.value === element) {
        break;
      }
      previous = current;
      current = current.getNext() as Node<TElement>;
    }
    if (current === undefined) {
      return;
    }
    if (this.head === current) {
      this.head = current.getNext();
      this.length--;
      return;
    }
    previous?.setNext(current.getNext());
    current.getNext()?.setPrev(previous);
    this.length--;
  }

  public count(): number {
    return this.length;
  }
}

class Node<TElement> {
  private next?: Node<TElement>;
  private prev?: Node<TElement>;

  constructor(public value: TElement) {
    this.value = value;
  }

  public getNext(): undefined | Node<TElement> {
    return this.next;
  }

  public getPrev(): undefined | Node<TElement> {
    return this.prev;
  }

  public setNext(value: Node<TElement> | undefined) {
    this.next = value;
  }

  public setPrev(value: Node<TElement> | undefined) {
    this.prev = value;
  }
}

