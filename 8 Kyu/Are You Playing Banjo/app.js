function banjo(name) {
  return name[0].toLowerCase() == "r" ? `${name} plays banjo` : `${name} does not play banjo`;

  //   return name + (name[0].toLowerCase() == "r" ? " plays" : " does not play") + " banjo";
}

console.log(banjo("Randi"));
