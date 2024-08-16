function nextItem(xs, item) {
  let found = false;
  for (const x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(["a", "b", "c"], "d"), undefined);
console.log(nextItem(["a", "b", "c"], "c"), undefined);
console.log(nextItem("testing", "t"), "e");
