function XO(str) {
  //   const string = str.toLowerCase();
  //   const x = string.split("").filter((s) => s == "x");
  //   const o = string.split("").filter((s) => s == "o");

  //   return x.length == 0 && o.length == 0 ? true : x.length == o.length ? true : false;

  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
