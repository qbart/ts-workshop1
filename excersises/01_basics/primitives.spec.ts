/**
 * Helpful links
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
 * https://basarat.gitbook.io/typescript/type-system#primitive-types
 * https://basarat.gitbook.io/typescript/type-system#arrays
 * https://basarat.gitbook.io/typescript/type-system#tuple-type
 */

import { add, concat, sum, negate } from "./primitives-hidden";
import { join, multiplyAll, sayHello } from "./primitives";

describe("primitives", () => {
  describe("#add", () => {
    it("should add values", () => {
      const result = add(2, 3);
      expect(result).toEqual(5);
    });
  });

  describe("#concat", () => {
    test("should concatenate values", () => {
      const result = concat("abc", 123);
      expect(result).toEqual("abc 123")
    });
  });

  describe("#sum", () => {
    test("should reduce values", () => {
      const result = sum([1,2,3,4]);
      expect(result).toEqual(10)
    });
  });

  describe("#negate", () => {
    test("should negate value", () => {
      const result = negate(true);
      expect(result).toEqual(false)
    });
  });

  describe("#join", () => {
    test("should concatenate values using comma", () => {
      expect(join(["foo", "bar", "3", "baz"])).toEqual("foo - bar - 3 - baz");
      expect(join(["lorem", "ipsum", "1", "2", "3"])).toEqual(
        "lorem - ipsum - 1 - 2 - 3"
      );
    });
  });

  describe("#multiplyAll", () => {
    test("should multiply all values by other value", () => {
      expect(multiplyAll(2, [1, 2, 3])).toEqual([2, 4, 6]);
      expect(multiplyAll(-5, [5, -2, -4])).toEqual([-25, 10, 20]);
    });
  });

  describe("#sayHello", () => {
    expect(sayHello("Endrju")).toEqual("Hello, Endrju!");
    expect(sayHello("Endrju", true)).toEqual("Hello, ENDRJU!");
  });
});
