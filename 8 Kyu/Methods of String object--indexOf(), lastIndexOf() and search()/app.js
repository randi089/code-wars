function firstToLast(str, c) {
  return str.indexOf(c) < 0 ? str.indexOf(c) : str.lastIndexOf(c) - str.indexOf(c);
}

console.log(firstToLast("ababc", "a"), 2);
console.log(firstToLast("ababc", "c"), 0);
console.log(firstToLast("ababc", "d"), -1);
