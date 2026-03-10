const object = require('./analyzeArray');

it('analyze array test 1', () => {
  expect(object([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
it('analyze array test 2', () => {
  expect(object([4, 5, 11, 37, 21, 1])).toEqual({
    average: 13,
    min: 1,
    max: 37,
    length: 6,
  });
});
it('analyze array test 3', () => {
  expect(object([12, 88, 3])).toEqual({
    average: 34,
    min: 3,
    max: 88,
    length: 3,
  });
});
