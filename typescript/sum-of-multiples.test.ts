import { expect, it, describe } from "@jest/globals";
import { sum } from "./sum-of-multiples";

describe("Sum Of Multiples", () => {
  it("no multiples within limit", () => {
    expect(sum([3, 5], 1)).toEqual(0);
  });

  it("one factor has multiples within limit", () => {
    expect(sum([3, 5], 4)).toEqual(3);
  });

  it("more than one multiple within limit", () => {
    expect(sum([3], 7)).toEqual(9);
  });

  it("more than one factor with multiples within limit", () => {
    expect(sum([3, 5], 10)).toEqual(23);
  });

  it("each multiple is only counted once", () => {
    expect(sum([3, 5], 100)).toEqual(2318);
  });

  it("a much larger limit", () => {
    expect(sum([3, 5], 1000)).toEqual(233168);
  });

  it("three factors", () => {
    expect(sum([7, 13, 17], 20)).toEqual(51);
  });

  it("factors not relatively prime", () => {
    expect(sum([4, 6], 15)).toEqual(30);
  });

  it("some pairs of factors relatively prime and some not", () => {
    expect(sum([5, 6, 8], 150)).toEqual(4419);
  });

  it("one factor is a multiple of another", () => {
    expect(sum([5, 25], 51)).toEqual(275);
  });

  it("much larger factors", () => {
    expect(sum([43, 47], 10000)).toEqual(2203160);
  });

  it("all numbers are multiples of 1", () => {
    expect(sum([1], 100)).toEqual(4950);
  });

  it("no factors means an empty sum", () => {
    expect(sum([], 10000)).toEqual(0);
  });

  it("the only multiple of 0 is 0", () => {
    expect(sum([0], 1)).toEqual(0);
  });

  it("the factor 0 does not affect the sum of multiples of other factors", () => {
    expect(sum([3, 0], 4)).toEqual(3);
  });

  it("solutions using include-exclude must extend to cardinality greater than 3", () => {
    expect(sum([2, 3, 5, 7, 11], 10000)).toEqual(39614537);
  });
});
