function parseF(s) {
  return /[a-z]/i.test(s) ? null : parseFloat(s);
}

console.log(parseF("1"), 1.0);
console.log(parseF("Nan"), null);
console.log(parseF("11n"), null);
