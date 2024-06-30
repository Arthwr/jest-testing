import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";

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
