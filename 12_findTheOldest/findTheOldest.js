const findTheOldest = function (arr) {
  let ageOfPpl = [];

  arr.forEach(element => {

    if ('yearOfDeath' in element === false) {
      ageOfPpl.push(new Date().getFullYear() - element['yearOfBirth']);
    } else {
      ageOfPpl.push(element['yearOfDeath'] - element['yearOfBirth']);
    }

  })

  let oldest = Math.max(...ageOfPpl);
  let indexOfOldest = ageOfPpl.indexOf(oldest);

  return arr[indexOfOldest];

};
// Do not edit below this line
module.exports = findTheOldest;
