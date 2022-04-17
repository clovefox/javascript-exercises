const fibonacci = function (n) {
  let numbersArr = [];

  if (n <= 0) { return 'OOPS' };

  if (n === 1) {
    numbersArr.push(1);
  } else if (n === 2) {
    numbersArr.push(1);
    numbersArr.push(1);
  } else {
    numbersArr.push(1);
    numbersArr.push(1);
    for (let i = 3; i <= n; i++) {
      let currentSum = numbersArr[i - 2] + numbersArr[i - 3];
      numbersArr.push(currentSum);
    }
  }

  return numbersArr[n - 1];

};


// Do not edit below this line
module.exports = fibonacci;

