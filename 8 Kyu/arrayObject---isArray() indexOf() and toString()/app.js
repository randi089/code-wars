function blackAndWhite(arr) {
  return `It's a ${!Array.isArray(arr) ? "fake" : arr.some((num) => num === 5) && arr.some((num) => num === 13) ? "black" : "white"} array`;
}

console.log(blackAndWhite(5, 13), "It's a fake array");
console.log(blackAndWhite([5, 13]), "It's a black array");
console.log(blackAndWhite([5, 12]), "It's a white array");
console.log(blackAndWhite([5, 13, 5, 13]), "It's a white array");
