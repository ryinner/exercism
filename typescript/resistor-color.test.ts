import { colorCode, COLORS } from "./resistor-color";
import { expect, test, describe } from "bun:test";

describe("color code", () => {
  test("Black", () => {
    expect(colorCode("black")).toEqual(0);
  });

  test("white", () => {
    expect(colorCode("white")).toEqual(9);
  });

  test("Orange", () => {
    expect(colorCode("orange")).toEqual(3);
  });
});

describe("Colors", () => {
  test("returns all colors", () => {
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
