function nextId(ids) {
  //   const array = Array.from(new Set(ids)).sort((a, b) => a - b);
  //   const number = array.map((value, index) => (index == 0 ? "" : value - array[index - 1] != 1 ? array[index - 1] + 1 : "")).find((value) => value);
  //   if (array[0] != 0) {
  //     return 0;
  //   }
  //   return number ? number : array[0] == 0 ? array.length : array.length + 1;
  let number = 0;
  while (ids.includes(number)) {
    number++;
  }
  return number;
}

console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
console.log(nextId([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
console.log(nextId([1, 2, 0, 2, 3, 5]), 4);
