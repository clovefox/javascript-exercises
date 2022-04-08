const removeFromArray = function (array, ...elements) {

  for (let value of elements) {
    let elementIndex = array.indexOf(value);
    if (elementIndex !== -1) {
      array.splice(elementIndex, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
