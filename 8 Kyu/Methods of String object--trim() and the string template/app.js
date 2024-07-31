function fiveLine(s) {
  const result = s.trim();
  return `${result}\n${result.repeat(2)}\n${result.repeat(3)}\n${result.repeat(4)}\n${result.repeat(5)}`;
}

console.log(fiveLine("  a"), "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n"), "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               "), "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
