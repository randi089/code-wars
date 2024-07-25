// return masked string
function maskify(cc) {
  //   if (cc.length < 5) {
  //     return cc;
  //   }
  //   return cc
  //     .split("")
  //     .map((c, i) => (i < cc.length - 4 ? "#" : c))
  //     .join("");

  return cc.slice(-4).padStart(cc.length, "#");

  //   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
