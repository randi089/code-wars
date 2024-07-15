function singkatan(nama) {
  //   let namas = nama.split(" ");
  //   return namas[0].charAt(0).toUpperCase() + "." + namas[1].charAt(0).toUpperCase();

  //   const nameArray = nama.split(" ");
  //   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

  return nama
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

console.log(singkatan("randi febriadi"));
