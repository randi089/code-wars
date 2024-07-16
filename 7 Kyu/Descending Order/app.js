function sortreverse(num) {
  //   return parseInt(String(num).split("").sort().reverse().join(""));

  return +String(num).split("").sort().reverse().join("");
}

console.log(sortreverse(42145));
