const reverse = require('./reverseString');

it('reverse string test', () => {
  expect(reverse('string')).toBe('gnirts');
});
it('reverse string test 2', () => {
  expect(reverse('strong')).toBe('gnorts');
});
