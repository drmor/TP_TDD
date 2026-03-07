const message = require('./capitalize');

it('capitalize message first test', () => {
  expect(message('hello')).toBe('Hello');
});

it('capitalize message second test', () => {
  expect(message('world')).toBe('World');
});

it('capitalize message third test', () => {
  expect(message('')).toBe('error');
});
