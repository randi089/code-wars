function operatormat(operator, value1, value2) {
  //   return operator == "+" ? value1 + value2 : operator == "-" ? value1 - value2 : operator == "*" ? value1 * value2 : value1 / value2;

  //   switch (operator) {
  //     case "+":
  //       return value1 + value2;
  //     case "-":
  //       return value1 - value2;
  //     case "*":
  //       return value1 * value2;
  //     case "/":
  //       return value1 / value2;
  //     default:
  //       return 0;
  //   }

  return eval(value1 + operator + value2);
}

console.log(operatormat("/", 10, 10));
