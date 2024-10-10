export class InvalidInputError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

enum Commands {
  Advanced = "A",
  Left = "L",
  Right = "R",
}

const DIRECTIONS: Direction[] = ["north", "east", "south", "west"];

export class Robot {
  private _direction: Direction = "north";
  private _coords: Coordinates = [0, 0];

  get bearing(): Direction {
    return this._direction;
  }

  get coordinates(): Coordinates {
    return this._coords;
  }

  place({
    direction,
    x,
    y,
  }: {
    x: number;
    y: number;
    direction: string;
  }): void {
    if (!isDirectionValid(direction)) {
      throw new InvalidInputError();
    }
    this._direction = direction;
    this._coords = [x, y];
  }

  evaluate(instructions: string): void {
    [...instructions].forEach((command) => {
      switch (command) {
        case Commands.Advanced:
          this.advance();
          break;
        case Commands.Left:
          this.turn(true);
          break;
        case Commands.Right:
          this.turn(false);
          break;
      }
    });
  }

  private advance(): void {
    switch (this._direction) {
      case "north":
        this._coords[1]++;
        break;
      case "east":
        this._coords[0]++;
        break;
      case "south":
        this._coords[1]--;
        break;
      case "west":
        this._coords[0]--;
        break;
    }
  }

  private turn(isLeftDirection: boolean): void {
    const currentDirectionIndex = DIRECTIONS.indexOf(this._direction);
    const step = isLeftDirection ? -1 : 1;
    let nextDirectionIndex = currentDirectionIndex + step;
    if (nextDirectionIndex >= DIRECTIONS.length) {
      nextDirectionIndex = 0;
    }
    if (nextDirectionIndex < 0) {
      nextDirectionIndex = DIRECTIONS.length - 1;
    }
    this._direction = DIRECTIONS[nextDirectionIndex];
  }
}

function isDirectionValid(direction: string): direction is Direction {
  return ["north", "east", "south", "west"].includes(direction);
}
