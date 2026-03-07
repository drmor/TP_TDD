function message(string) {
  if (string == '') {
    return 'error';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = message;
