import { colorCode, COLORS } from "./resistor-color";
import { expect, it, describe } from "bun:test";

describe("color code", () => {
  it("Black", () => {
    expect(colorCode("black")).toEqual(0);
  });

  it("white", () => {
    expect(colorCode("white")).toEqual(9);
  });

  it("Orange", () => {
    expect(colorCode("orange")).toEqual(3);
  });
});

describe("Colors", () => {
  it("returns all colors", () => {
    expect(COLORS).toEqual([
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ]);
  });
});
