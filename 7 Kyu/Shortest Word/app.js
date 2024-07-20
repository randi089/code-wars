function findShort(s) {
  //   let result;
  //   s.split(" ").map((m) => {
  //     if (!result) {
  //       result = m;
  //     }
  //     if (m.length < result.length) {
  //       result = m;
  //     }
  //   });
  //   return result.length;

  //   return Math.min(...s.split(" ").map((s) => s.length));

  //   return s.split(" ").sort((a, b) => a.length - b.length)[0].length;

  return s.split(" ").reduce((acc, value) => (acc.length <= value.length ? acc : value)).length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);
