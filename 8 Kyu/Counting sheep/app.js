function csheep(sheep) {
  //   let num = 0;
  //   for (var i = 0; i < sheep.length; i++) {
  //     if (sheep[i] == true) {
  //       num++;
  //     }
  //   }
  //   return num;

  //   return sheep.filter((sp) => sp == true).length;

  return sheep.filter(Boolean).length;
}

console.log(csheep([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
