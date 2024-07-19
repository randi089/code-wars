function humanReadable(seconds) {
  let hours = 0,
    minutes = 0,
    second = seconds,
    kondisi = false;
  while (kondisi == false) {
    if (second > 59) {
      second -= 60;
      minutes++;
    }
    if (minutes > 59) {
      minutes -= 60;
      hours++;
    }
    if (second < 60 && minutes < 60 && hours < 100) {
      kondisi = true;
    }
  }
  hours = String(hours);
  minutes = String(minutes);
  second = String(second);

  return `${hours.length > 1 ? hours : "0" + hours}:${minutes.length > 1 ? minutes : "0" + minutes}:${second.length > 1 ? second : "0" + second}`;
}

console.log(humanReadable(0), "00:00:00");
console.log(humanReadable(59), "00:00:59");
console.log(humanReadable(60), "00:01:00");
console.log(humanReadable(90), "00:01:30");
console.log(humanReadable(3599), "00:59:59");
console.log(humanReadable(3600), "01:00:00");
console.log(humanReadable(45296), "12:34:56");
console.log(humanReadable(86399), "23:59:59");
console.log(humanReadable(86400), "24:00:00");
console.log(humanReadable(359999), "99:59:59");
