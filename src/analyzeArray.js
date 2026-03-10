function analyze(arr) {
  function average() {
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
  }
  function min() {
    return Math.min(...arr);
  }
  function max() {
    return Math.max(...arr);
  }
  function len() {
    return arr.length;
  }
  const object = {
    average: average(),
    min: min(),
    max: max(),
    length: len(),
  };
  return object;
}

module.exports = analyze;
