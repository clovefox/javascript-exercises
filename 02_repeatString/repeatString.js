const repeatString = function (string, repetitions) {
  let repeatedString = [];

  if (repetitions >= 0) {

    for (let i = 1; i <= repetitions; i++) {
      repeatedString.push(string);
    }

    repeatedString = repeatedString.join('');
    return repeatedString;

  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
