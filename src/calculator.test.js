const math = require('./calculator');

it('add', () => {
  expect(math.add(1, 2)).toBe(3);
});
it('subtract', () => {
  expect(math.subtract(1, 2)).toBe(-1);
});
it('divide', () => {
  expect(math.divide(4, 2)).toBe(2);
});
it('multiply', () => {
  expect(math.multiply(1, 2)).toBe(2);
});
