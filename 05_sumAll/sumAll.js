const sumAll = function (number1, number2) {
  let numbers = [];
  let sum = null;
  let allNumbers = true;

  if (typeof number1 === 'number' && typeof number2 === 'number') {
    allNumbers = true;
  } else {
    allNumbers = false;
  }

  if (allNumbers && (number1 >= 0 && number2 >= 0)) {

    if (number1 < number2) {
      for (let i = number1; i <= number2; i++) {
        numbers.push(i);
      }

    } else if (number1 > number2) {
      for (let i = number2; i <= number1; i++) {
        numbers.push(i);
      }
    }

  } else {

    return 'ERROR';

  }

  for (let value of numbers) {
    sum += value;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
