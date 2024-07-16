function getCount(str) {
  //   return str
  //     .toLowerCase()
  //     .split("")
  //     .map((m) => (m == "a" || m == "e" || m == "i" || m == "o" || m == "u" ? 1 : 0))
  //     .reduce((acc, value) => acc + value, 0);

  //   let vowelsCount = 0;
  //   let vowels = ["a", "e", "i", "o", "u"];
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = 0; j < vowels.length; j++) {
  //       if (str[i] === vowels[j]) {
  //         vowelsCount++;
  //       }
  //     }
  //   }
  //   return vowelsCount;

  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("mantapitu"), 5);
