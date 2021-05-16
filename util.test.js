const { add, sub, div, mult} = require('./util');

test('Expect 1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
});

test("Expect 1 - 1 = 0", () => {
  expect(sub(1, 1)).toBe(0);
});

test("Expect 2 / 1 = 2", () => {
  expect(div(2, 1)).toBe(2);
});

test("Expect 2 * 2 = 4", () => {
  expect(add(2, 2)).toBe(4);
});