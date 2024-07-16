class RomanNumerals {
  static toRoman(num) {
    let huruf = "",
      n = 0,
      value = num;
    if (value >= 1000) {
      while (n < String(value)[0]) {
        huruf += "M";
        n++;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 900) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "CM";
        n += 9;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 500) {
      n = 4;
      while (n < String(value)[0]) {
        huruf += "D";
        n += 5;
      }
      value = +(+String(value)[0] - 5 + String(value).slice(1));
    }
    if (value >= 400) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "CD";
        n += 4;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 100) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "C";
        n++;
      }
      value = +(+String(value)[0] - 1 * n + String(value).slice(1));
    }
    if (value >= 90) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "XC";
        n += 9;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 50) {
      n = 4;
      while (n < String(value)[0]) {
        huruf += "L";
        n += 5;
      }
      value = +(+String(value)[0] - 5 + String(value).slice(1));
    }
    if (value >= 40) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "XL";
        n += 4;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 10) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "X";
        n++;
      }
      value = +(+String(value)[0] - 1 * n + String(value).slice(1));
    }
    if (value >= 9) {
      n = 0;
      while (n < String(value)[0]) {
        huruf += "IX";
        n += 9;
      }
      value = Number(String(value).slice(1));
    }
    if (value >= 5) {
      n = 4;
      while (n < value) {
        huruf += "V";
        n += 5;
      }
      value = value - 5;
    }
    if (value >= 4) {
      n = 0;
      while (n < value) {
        huruf += "IV";
        n += 4;
      }
      value = value - 4;
    }
    if (value >= 1) {
      n = 0;
      while (n < value) {
        huruf += "I";
        n++;
      }
      value = value - value;
    }

    return huruf;
  }

  static fromRoman(str) {
    let result = 0,
      n = false,
      huruf = str;
    while (n == false) {
      if (huruf[0] == "M") {
        result += 1000;
        huruf = huruf.slice(1);
      }
      if (huruf[0] == "C") {
        if (huruf[0] + huruf[1] == "CM") {
          result += 900;
          huruf = huruf.slice(2);
        } else if (huruf[0] + huruf[1] == "CD") {
          result += 400;
          huruf = huruf.slice(2);
        } else {
          result += 100;
          huruf = huruf.slice(1);
        }
      }
      if (huruf[0] == "D") {
        result += 500;
        huruf = huruf.slice(1);
      }
      if (huruf[0] == "X") {
        if (huruf[0] + huruf[1] == "XC") {
          result += 90;
          huruf = huruf.slice(2);
        } else if (huruf[0] + huruf[1] == "XL") {
          result += 40;
          huruf = huruf.slice(2);
        } else {
          result += 10;
          huruf = huruf.slice(1);
        }
      }
      if (huruf[0] == "L") {
        result += 50;
        huruf = huruf.slice(1);
      }
      if (huruf[0] == "I") {
        if (huruf[0] + huruf[1] == "IX") {
          result += 9;
          huruf = huruf.slice(2);
        } else if (huruf[0] + huruf[1] == "IV") {
          result += 4;
          huruf = huruf.slice(2);
        } else {
          result += 1;
          huruf = huruf.slice(1);
        }
      }
      if (huruf[0] == "V") {
        result += 5;
        huruf = huruf.slice(1);
      }
      if (huruf.length < 1) {
        n = true;
      }
    }
    return result;
  }
}

console.log(RomanNumerals.toRoman(1000), "M");
console.log(RomanNumerals.toRoman(4), "IV");
console.log(RomanNumerals.toRoman(1), "I");
console.log(RomanNumerals.toRoman(1990), "MCMXC");
console.log(RomanNumerals.toRoman(2008), "MMVIII");

console.log(RomanNumerals.fromRoman("XXI"), 21);
console.log(RomanNumerals.fromRoman("I"), 1);
console.log(RomanNumerals.fromRoman("IV"), 4);
console.log(RomanNumerals.fromRoman("MMVIII"), 2008);
console.log(RomanNumerals.fromRoman("MDCLXVI"), 1666);
