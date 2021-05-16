const { add, sub, div, mult, moreAdvMath} = require('./util');

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
  expect(mult(2, 2)).toBe(4);
});

test('Expect 2 != 1, 2 + 1 = 3 ', () => {
  expect(moreAdvMath(2, 1).toBe(3));
});

test('Expect c = 4, 2 + 2 - 4 = 0', () => {
  expect(moreAdvMath(2, 2)).toBe(4);
});