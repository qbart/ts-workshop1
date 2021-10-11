/**
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 * https://basarat.gitbook.io/typescript/type-system/typeguard
 */
import {
  GoogleDocument,
  NotFoundError,
  WordDocument,
} from "./type-guards.helpers";
import {
  calculatorReducer as reducer,
  createArray,
  displayPoint,
  getAccountName,
  isHttpError,
  printDocument,
} from "./type-guards";

describe("#type-guards", () => {
  describe("#calculatorReducer", () => {
    test("should multiply values and add payload to state", () => {
      const state = reducer(5, { type: "multiply", factor: 7 });
      expect(state).toEqual(35);
    });

    test("should add payload to state", () => {
      const state = reducer(3, { type: "add", summand: 8 });
      expect(state).toEqual(11);
    });

    test("should subtract payload from state", () => {
      const state = reducer(44, { type: "subtract", subtrahend: 11 });
      expect(state).toEqual(33);
    });

    test("should reset calculator state", () => {
      const state = reducer(13, { type: "reset" });
      expect(state).toEqual(0);
    });
  });

  describe("#printDocument", () => {
    describe("#printDocument", () => {
      test("should get word document content", () => {
        const word = new WordDocument("lorem ipsum");

        expect(word.readContent()).toEqual("lorem ipsum");
        expect(printDocument(word)).toEqual(word.readContent());
      });

      test("should get google document content", () => {
        const googleDoc = new GoogleDocument("foo bar baz");

        expect(googleDoc.fetchContent()).toEqual("foo bar baz");
        expect(printDocument(googleDoc)).toEqual(googleDoc.fetchContent());
      });
    });
  });

  describe("#createArray", () => {
    test("should create array with empty strings", () => {
      const arr = createArray(3);

      expect(arr).toEqual(expect.arrayContaining(["", "", ""]));
      expect(arr.length).toEqual(3);
    });

    test("should create array with prefilled strings", () => {
      const arr = createArray({ size: 2, fill: "n/a" });
      expect(arr).toEqual(expect.arrayContaining(["n/a", "n/a"]));
      expect(arr.length).toEqual(2);
    });
  });

  describe("#getAccountName", () => {
    test("should get user name for social media accounts", () => {
      // Twitter account
      expect(getAccountName({ nickname: "j0hnP40t0n" })).toEqual("j0hnP40t0n");

      // Facebook account
      expect(
        getAccountName({ firstName: "Jan", lastName: "Brzechwa" })
      ).toEqual("Jan Brzechwa");
    });
  });

  describe("#displayPoint", () => {
    test("should present point point with decimal places", () => {
      expect(displayPoint(5)).toEqual("5.00");
      expect(displayPoint(2.137)).toEqual("2.14");
      expect(displayPoint(13.37)).toEqual("13.37");
    });

    test("should display text when value is nil", () => {
      expect(displayPoint(null)).toEqual("-");
      expect(displayPoint()).toEqual("-");
    });
  });

  describe("#isHttpError", () => {
    const printError = (error: Error) => {
      if (isHttpError(error)) {
        return `${error.status} ${error.message}`;
      }

      return error.message;
    };

    test("should print status and message on http error", () => {
      expect(printError(new NotFoundError("Not found"))).toEqual(
        "404 Not found"
      );
    });

    test("should display error message", () => {
      expect(printError(new Error("Stuff happens..."))).toEqual(
        "Stuff happens..."
      );
    });
  });
});
