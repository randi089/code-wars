function doubleChar(str) {
  let tes = "";
  for (const i of str) {
    tes += i + i;
  }
  return tes;
}

console.log(doubleChar("1234_"));
