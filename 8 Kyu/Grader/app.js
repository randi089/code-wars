function grader(score) {
  switch (true) {
    case score > 1:
      return "F";
    case score >= 0.9:
      return "A";
    case score >= 0.8:
      return "B";
    case score >= 0.7:
      return "C";
    case score >= 0.6:
      return "D";
    default:
      return "F";
  }
}

console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");
console.log(grader(0), "D");
