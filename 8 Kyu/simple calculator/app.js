function calculator(a,b,sign){
    
    // if(!'+-*/'.includes(sign) || typeof a != 'number' || typeof b != 'number') {
    //   return 'unknown value';
    // }
    
    // return eval(a + sign + b);

    if ((typeof a === "number") && (typeof b === "number")) {
        switch (sign) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        }
      }
      return "unknown value";
  }

  console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");   