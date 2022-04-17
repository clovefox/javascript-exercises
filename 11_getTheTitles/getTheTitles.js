const getTheTitles = function (array) {
  let onlyTitlesArr = []

  array.forEach(element => {
    onlyTitlesArr.push(element.title);
  })

  return onlyTitlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
