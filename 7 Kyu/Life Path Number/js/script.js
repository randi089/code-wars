function calculateLifePath(yearOrMonthOrDate) {
  let temp;
  if (yearOrMonthOrDate.toString().length > 1) {
    temp = yearOrMonthOrDate
      .toString()
      .split("")
      .map((char) => parseInt(char, 10))
      .reduce((acc, value) => acc + value);

    if (temp.toString().length > 1) {
      return calculateLifePath(temp.toString());
    }
    return temp.toString();
  }
  return yearOrMonthOrDate.toString();
}

function lifePathNumber(dateOfBirth) {
  const dates = dateOfBirth.split("-");
  const total = dates.map((date) => calculateLifePath(date)).reduce((acc, value) => acc + value);

  return calculateLifePath(total);
}

console.log(lifePathNumber("1956-01-31"));
