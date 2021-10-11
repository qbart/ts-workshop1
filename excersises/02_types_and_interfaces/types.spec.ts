/**
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */
import { ArrayOfStringsAndNumbers, NumberOrString } from "./types";

describe("#types", () => {
  test("#numberOrString", () => {
    const first: NumberOrString = 1;
    const second: NumberOrString = "foo";

    expect(first).toEqual(1);
    expect(second).toEqual("foo");
  });

  test("#mixedArray", () => {
    let testArr: ArrayOfStringsAndNumbers = [1, 2, 3, "foo", "bar", "baz"];

    expect(testArr).toHaveLength(6);
  });
});
