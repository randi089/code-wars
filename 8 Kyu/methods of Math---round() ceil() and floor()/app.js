function roundIt(n) {
  const [a, b] = n.toString().split(".");
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}

console.log(roundIt(3.45), 4);
console.log(roundIt(34.5), 34);
console.log(roundIt(34.56), 35);
