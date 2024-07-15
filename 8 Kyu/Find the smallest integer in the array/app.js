function small(arr) {
  //   return arr.sort((a, b) => a - b)[0];

  //   let result = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     result >= arr[i] ? (result = arr[i]) : result;
  //   }
  //   return result;

  return Math.min(...arr);
}
console.log(small([34, 15, 100, 2]));
