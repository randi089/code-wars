function akar(number) {
  //   return Math.sqrt(number) % 1 === 0;

  return Number.isInteger(Math.sqrt(number));

  //   const num = Math.sqrt(number);
  //   return num - Math.ceil(num) == 0 ? true : false;
}

console.log(akar(50));
