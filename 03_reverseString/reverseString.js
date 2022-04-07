const reverseString = function (string) {
  let stringArr = string.split("");
  let reverseArr = [];

  for (let i = 0; i < string.length; i++) {
    reverseArr.unshift(string[i]);
  }

  let reversedString = reverseArr.join('');

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
