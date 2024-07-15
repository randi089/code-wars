function removeChar(string) {
  return string.slice(1, -1);

  //   return string.substring(1, string.length - 1);

  //   str1 = string.split("");
  //   str1.shift();
  //   str1.pop();
  //   return str1.join("");
}

console.log(removeChar("eloquent"), "loquen");
console.log(removeChar("country"), "ountr");
console.log(removeChar("person"), "erso");
console.log(removeChar("place"), "lac");
console.log(removeChar("ooopsss"), "oopss");
console.log(removeChar("tse"));
