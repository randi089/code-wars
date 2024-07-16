function numberint(arr) {
  return arr.filter((m) => typeof m == "number" && m >= 0);
}

console.log(numberint([1, 2, "aasf", "1", "123", 123]));
