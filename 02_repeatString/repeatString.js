const repeatString = function (string, repetitions) {
  let repeatedString = [];
  for (let i = 1; i <= repetitions; i++) {
    repeatedString.push(string);
  }
  repeatedString = repeatedString.join('');
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
