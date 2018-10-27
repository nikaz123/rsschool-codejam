function sumOfOther (arr) {
  function add(a, b) {
    return a + b;
  }
  const sum = arr.reduce(add, 0);
  return arr.map(k => sum - k);
}
