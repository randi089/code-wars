function rstring(string) {
  //   return string.split("").reverse().join("");
  //   return [...string].reverse().join("");
  var o = "";
  for (var i = string.length - 1; i >= 0; i--) o += string[i];
  return o;
}

console.log(rstring("Randi"));
