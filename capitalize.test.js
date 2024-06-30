import capitalize from "./capitalize.js";

test("Takes string and returns it with first character capitalized", () => {
  expect(capitalize("london")).toBe("London");
});
