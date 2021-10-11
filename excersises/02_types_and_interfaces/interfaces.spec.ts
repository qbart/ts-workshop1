/**
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * https://basarat.gitbook.io/typescript/type-system#interfaces
 */
import { CarCheck } from "./interfaces-hidden";

describe("#interfaces", () => {
  describe("#car", () => {
    test("should have correct structure", () => {
      type ExpectedCar = CarCheck<Car>;

      const cars: ExpectedCar[] = [
        {
          brand: "ford",
          model: "fiesta",
          doors: 3,
          leftHanded: true,
        },
        {
          brand: "toyota",
          model: "yaris",
          doors: 5,
          leftHanded: false,
        },
      ];

      expect(Object.keys(cars[0])).toHaveLength(4);
    });
  });
});
