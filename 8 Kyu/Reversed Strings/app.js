function rstring(string) {
  //   return string.split("").reverse().join("");
  return [...string].reverse().join("");
}

console.log(rstring("Randi"));
