function jumlah(n) {
  //   let total = 0;
  //   for (let i = 1; i <= n; i++) {
  //     total += i;
  //   }
  //   return total;

  //   return n ? n + jumlah(n - 1) : 0;

  return (n * (n + 1)) / 2;
}

console.log("Hasil : " + jumlah(8));
