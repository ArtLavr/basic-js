const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCat = 0;
  matrix.forEach(row => row.forEach(elementRow => elementRow === '^^' ? countCat++ : countCat));
  return countCat
};
