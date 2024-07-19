function formatDuration(seconds) {
  if (seconds == 0) {
    return "now";
  }
  const second = seconds % 60;
  const minute = parseInt(seconds / 60) % 60;
  const hour = parseInt((seconds / (60 * 60)) % 24);
  const day = parseInt((seconds / (60 * 60 * 24)) % 365);
  const year = parseInt(seconds / (60 * 60 * 24 * 365));
  const resultSecond = second > 1 ? second + " seconds" : second == 1 ? second + " second" : "";
  const resultMinute = minute > 1 ? minute + " minutes" : minute == 1 ? minute + " minute" : "";
  const resultHour = hour > 1 ? hour + " hours" : hour == 1 ? hour + " hour" : "";
  const resultDay = day > 1 ? day + " days" : day == 1 ? day + " day" : "";
  const resultYear = year > 1 ? year + " years" : year == 1 ? year + " year" : "";
  if (year > 0 && day > 0 && hour > 0 && minute > 0 && second > 0) {
    return `${resultYear}, ${resultDay}, ${resultHour}, ${resultMinute} and ${resultSecond}`;
  }
  if (year > 0 && day > 0 && hour > 0 && minute > 0) {
    return `${resultYear}, ${resultDay}, ${resultHour} and ${resultMinute}`;
  }
  if (day > 0 && hour > 0 && minute > 0 && second > 0) {
    return `${resultDay}, ${resultHour}, ${resultMinute} and ${resultSecond}`;
  }
  if (day > 0 && minute > 0 && second > 0) {
    return `${resultDay}, ${resultMinute} and ${resultSecond}`;
  }
  if (day > 0 && hour > 0 && minute > 0) {
    return `${resultDay}, ${resultHour} and ${resultMinute}`;
  }
  if (hour > 0 && minute > 0 && second > 0) {
    return `${resultHour}, ${resultMinute} and ${resultSecond}`;
  }
  if (minute > 0 && second > 0) {
    return `${resultMinute} and ${resultSecond}`;
  }
  return day > 0 ? resultDay : hour > 0 ? resultHour : minute > 0 ? resultMinute : resultSecond;
}

console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
