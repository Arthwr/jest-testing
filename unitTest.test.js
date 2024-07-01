import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";
import calculator from "./calculator.js";
import caesarCipher from "./caesarCipher.js";
import analyzeArray from "./analyzeArray.js";

describe("String with first character capitalized function", () => {
  test.each([
    ["london", "London"],
    ["Canada", "Canada"],
    ["mAJESTY", "MAJESTY"],
  ])('Capitalizes "%s" to "%s"', (input, expected) => {
    expect(capitalize(input)).toBe(expected);
  });
});

describe("String reversal function", () => {
  test.each([
    ["12345", "54321"],
    [
      "The path to success is a discipline",
      "enilpicsid a si sseccus ot htap ehT",
    ],
    ["Hello, World!", "!dlroW ,olleH"],
  ])('Reverses "%s" to "%s"', (input, expected) => {
    expect(reverseString(input)).toBe(expected);
  });
});

describe("Calculator functions:", () => {
  describe("add", () => {
    test.each([
      [2, 2, 4],
      [-2, -2, -4],
      [55, -44, 11],
    ])("Adds (%i, %i) to be %d", (a, b, expected) => {
      const result = calculator().add(a, b);
      expect(result).toBe(expected);
    });
  });

  describe("subtract", () => {
    test.each([
      [2, 2, 0],
      [-5, -8, 3],
      [9245, -84244, 93489],
    ])("Subtracts (%i, %i) to be %d", (a, b, expected) => {
      const result = calculator().subtract(a, b);
      expect(result).toBe(expected);
    });
  });

  describe("divide", () => {
    test.each([
      [2, 2, 1],
      [4, 0, Infinity],
      [-1, 0, -Infinity],
      [14, 2, 7],
      [0, 0, NaN],
    ])("Divides %i by %i to get %d", (a, b, expected) => {
      const result = calculator().divide(a, b);

      if (isNaN(expected)) {
        expect(result).toBeNaN();
      } else {
        expect(result).toBe(expected);
      }
    });
  });

  describe("multiply", () => {
    test.each([
      [2, 0, 0],
      [2, 2, 4],
      [-2, 10, -20],
    ])("Multiply %i by %i to get %d", (a, b, expected) => {
      const result = calculator().multiply(a, b);
      expect(result).toBe(expected);
    });
  });
});

describe("Caesar cipher:", () => {
  test.each([
    ["arthur", 1, "bsuivs"],
    ["Wisdom", 15, "Lxhsdb"],
    ["xyz", 3, "abc"],
    ["HeLLo", 3, "KhOOr"],
    ["Hello, World!", 3, "Khoor, Zruog!"],
  ])(
    'Transforms string "%s" with shift factor %d to "%s"',
    (string, shift, expected) => {
      expect(caesarCipher(string, shift)).toBe(expected);
    }
  );
});

describe("Analyze array: ", () => {
  test.each([
    [[1, 8, 3, 4, 2, 6], { average: 4, min: 1, max: 8, length: 6 }],
    [[-2, 4, 10, 5, 10, 240], { average: 44.5, min: -2, max: 240, length: 6 }],
    [[0, 10, 20, 30, 40], { average: 20, min: 0, max: 40, length: 5 }],
  ])("Array of %o with object result of %o", (array, expected) => {
    expect(analyzeArray(array)).toEqual(expected);
  });
});
