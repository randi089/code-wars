function cutIt(arr) {
  const min = Math.min(...arr.map((value) => value.length));
  return arr.map((value) => value.slice(0, min));
}

console.log(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
console.log(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
console.log(cutIt(["codewars", "javascript", "java"]), ["code", "java", "java"]);
