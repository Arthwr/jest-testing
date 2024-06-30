import capitalize from "./capitalize.js";

test("Takes a string and returns it with first character capitalized", () => {
  expect(capitalize("london")).toBe("London");
});

test("Takes a string and returns it with first character capitalized(2)", () => {
  expect(capitalize("canada")).toBe("Canada");
});
