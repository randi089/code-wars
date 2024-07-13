function hello(name) {
  if (!name) {
    return "Hello World!";
  }
  return "Hello " + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
}

console.log(hello("randi"));
