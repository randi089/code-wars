function isIsogram(str) {
  //   let string = str.toLowerCase();
  //   for (let i = 0; i < string.length; i++) {
  //     for (let j = 0; j < string.length; j++) {
  //       if (string[i] == string[j] && i != j) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;

  return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");
