const { add, subtract } = require('../math.js');

test('add function', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 2)).toBe(4);
  expect(add(2, 3)).toBe(5);
});

test('subtract function', () => {
  expect(subtract(100, 20)).toBe(80);
  expect(subtract(2, 2)).toBe(0);
  expect(subtract(2, 3)).toBe(-1);
});