/**
 * https://basarat.gitbook.io/typescript/type-system/functions
 * https://www.typescriptlang.org/docs/handbook/2/functions.html
 */

import { repeat, timeout } from "./functions";
import { CallbackArgs } from "./functions-hidden";

describe("#functions", () => {
  describe("#repeat", () => {
    test("should repeat string several times", () => {
      expect(repeat("a", { times: 3, join: false })).toEqual(["a", "a", "a"]);
      expect(repeat("b", { times: 4, join: "-" })).toEqual("b-b-b-b");
      expect(repeat("c", { times: 5, join: "" })).toEqual("ccccc");
    });
  });

  describe("#timeout", () => {
    test("should call callback function after timeout period", () => {
      jest.useFakeTimers();

      const timeToAdvance = 15000;
      const callback = jest.fn<void, CallbackArgs>();

      timeout({ time: timeToAdvance, callback });
      timeout({ time: 500, callback: (err, result) => console.log(result) });

      jest.advanceTimersByTime(timeToAdvance);

      expect(callback).toBeCalledWith(null, timeToAdvance);

      jest.useRealTimers();
    });
  });
});
