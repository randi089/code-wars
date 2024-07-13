// function tes(a, b) {
//   let long, short;
//   if (a.length > b.length) {
//     long = a;
//     short = b;
//   } else {
//     long = b;
//     short = a;
//   }
//   return short + long + short;
// }

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(solution("13", "200"));
