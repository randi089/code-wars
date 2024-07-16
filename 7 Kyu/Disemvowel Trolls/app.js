function coment(message) {
  //   return message.replace(/[aeiou]/gi, "");

  return message
    .split("")
    .filter((m) => !"aiueoAIUEO".includes(m))
    .join("");
}

console.log(coment("This website is for losers LOL!"));
