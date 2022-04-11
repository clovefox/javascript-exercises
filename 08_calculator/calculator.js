const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arrOfNumbers) {
  let sum = null;

  if (arrOfNumbers.length === 0) {
    return 0;
  }

  for (let value of arrOfNumbers) {
    sum += value;
  }

  return sum;
};

const multiply = function (arrOfNumbers) {
  let result = 1;

  for (let value of arrOfNumbers) {
    result *= value;
  }

  return result;
};

const power = function (base, power) {
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= base;
  }

  return result;
};

const factorial = function (n) {
  let result = 1;

  if (n === 0) { return 1 }

  for (i = 1; i <= n; i++) {
    result *= i;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
