function findAverage(array) {
  //   if (array.length === 0) {
  //     return 0;
  //   }
  //   var result = 0;
  //   for (i = 0; i < array.length; i++) {
  //     result += array[i];
  //   }
  //   return result / array.length;

  return array.length > 0 ? array.reduce((acc, value) => acc + value, 0) / array.length : 0;
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
