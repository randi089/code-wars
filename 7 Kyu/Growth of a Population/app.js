function nbYear(p0, percent, aug, p) {
  let tahun = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + ((p0 * percent) / 100 + aug));
    tahun += 1;
  }
  return tahun;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1000, 2.0, 50, 1214), 4, "Did you maybe forgot to round down population at the end of each year?");
