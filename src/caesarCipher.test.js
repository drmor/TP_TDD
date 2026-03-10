const shift = require('./caesarCipher');

it('check caesarCipher for one letter', () => {
  expect(shift('z', 3)).toBe('c');
});
it('check caesarCipher for word (first letters)', () => {
  expect(shift('abc', 3)).toBe('def');
});
it('check caesarCipher for word (last letters)', () => {
  expect(shift('xyz', 3)).toBe('abc');
});
it('check caesarCipher for real word', () => {
  expect(shift('hello', 3)).toBe('khoor');
});
it('check caesarCipher for upperCase letter', () => {
  expect(shift('heLLo', 3)).toBe('khOOr');
});
it('check caesarCipher for phrase with symbols', () => {
  expect(shift('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
it('check caesarCipher for reverse key', () => {
  expect(shift('xyz', -3)).toBe('uvw');
});
it('check caesarCipher with a massive key', () => {
  expect(shift('xyz', 1000)).toBe('jkl');
});
