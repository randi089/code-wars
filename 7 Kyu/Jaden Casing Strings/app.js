String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((m) => m[0].toUpperCase() + m.slice(1))
    .join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
