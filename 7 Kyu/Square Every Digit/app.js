function pangkat(number) {
  return +String(number)
    .split("")
    .map((n) => n * n)
    .join("");
}

console.log(pangkat(765));
