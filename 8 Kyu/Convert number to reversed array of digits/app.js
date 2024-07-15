function digitize(number) {
  //   return number
  //     .toString()
  //     .split("")
  //     .map((m) => parseInt(m))
  //     .reverse();

  return String(number).split("").map(Number).reverse();

  //   return Array.from(String(number), Number).reverse();
}

console.log(digitize(1234567));

console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);
