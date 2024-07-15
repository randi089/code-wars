function sump(array) {
  //   let result = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] < 0) {
  //       array[i] = 0;
  //     }
  //     result += array[i];
  //   }
  //   return result;

  return array.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(sump([1, -4, 7, 12]));
