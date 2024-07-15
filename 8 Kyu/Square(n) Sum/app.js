function ssum(arr) {
  //   if (arr.length < 1) {
  //     return 0;
  //   }
  //   return arr.map((a) => a * a).reduce((acc, value) => acc + value);

  //   return arr.map((a) => a * a).reduce((acc, value) => acc + value, 0);

  return arr.reduce((acc, value) => acc + value * value, 0);
}

console.log(ssum([1, 2, 2]));
