function highAndLow(numbers) {
  //   let result = numbers.split(" ").map((num) => Number(num));
  //   return Math.max(...result) + " " + Math.min(...result);

  let result = numbers.split(" ");
  return Math.max(...result) + " " + Math.min(...result);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
