const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function caesarCipher(value, key) {
  const string = value.split('');
  const shiftedString = string
    .map((char) => {
      const upperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) return char;
      const newIndex = (index + (key % 26) + 26) % 26;
      const newChar = alphabet[newIndex];
      return upperCase ? newChar.toUpperCase() : newChar;
    })
    .join('');
  return shiftedString;
}

module.exports = caesarCipher;
