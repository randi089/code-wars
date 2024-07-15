function numpa(a, b) {
  //   let result = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     arr1[i] > arr2[i] ? result.push(arr1[i]) : result.push(arr2[i]);
  //   }
  //   return result;

  //   var newArray = [];

  //   for (i = 0; i < a.length; i++) {
  //     newArray.push(Math.max(a[i], b[i]));
  //   }

  //   return newArray;

  return a.map((v, i) => Math.max(v, b[i]));
}

console.log(numpa([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
