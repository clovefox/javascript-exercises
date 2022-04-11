const palindromes = function (string) {

  let stringRemoveSpecialCharacters = (string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).replace(/\s{2,}/g, " ");
  let stringModifiedRemoveSpaces = stringRemoveSpecialCharacters.replace(/ /g, "");
  let stringModifiedToLowerCase = stringModifiedRemoveSpaces.toLowerCase();


  let stringToArray = stringModifiedToLowerCase.split("");
  let reverseArray = [];

  for (let value of stringToArray) {
    reverseArray.unshift(value);
  }

  let reverseString = reverseArray.join("");

  return (stringModifiedToLowerCase === reverseString ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
