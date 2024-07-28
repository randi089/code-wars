function howManySmaller(arr, n) {
  //   const finalArr = arr.map((value) => +value.toFixed(2));
  //   const min = Math.min(...finalArr, n);
  //   let count = 0;
  //   if (min === n) {
  //     count++;
  //   }
  //   finalArr.forEach((value) => {
  //     if (value === min) {
  //       count++;
  //     }
  //   });
  //   return count;

  return arr.filter((x) => +x.toFixed(2) < n).length;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);
