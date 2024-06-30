import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";

test("Takes a string and returns it with first character capitalized", () => {
  expect(capitalize("london")).toBe("London");
});

test("Takes a string and returns it with first character capitalized(2)", () => {
  expect(capitalize("canada")).toBe("Canada");
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
