function getSum(a, b) {
  // const min = a < b ? a : b;
  // const max = a > b ? a : b;
  // let sum = 0;
  // if (a === b) {
  //   return a;
  // }
  // for (let i = min; i <= max; i++) {
  //   sum += i;
  // }
  // return sum;

  // let min = Math.min(a, b),
  //   max = Math.max(a, b);
  // return ((max - min + 1) * (min + max)) / 2;

  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(2, 2), 2);
