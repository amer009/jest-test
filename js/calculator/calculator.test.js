const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 5 to equal 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('divide 12 / 3 to equal 4', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

test('multiply 6 * 4 to equal 24', () => {
  expect(calculator.multiply(6, 4)).toBe(24);
});

test('multiply 5 * 7 to equal 35', () => {
  expect(calculator.multiply(5, 7)).toBe(35);
});

test('divide by 0 should throw an error', () => {
  expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
});