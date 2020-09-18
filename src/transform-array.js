const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw Error("");
  // throw new CustomError('Not implemented');


  for (let index = 0; index < arr.length; index++) {
    let currentValue = arr[index];
    if (currentValue == "--discard-prev") {
      if (index == 0) {
        arr.splice(0, 1);
        continue;
      }
      arr.splice(index - 1, 2);
      index = index - 2;
    } else if (currentValue == "--double-prev") {
      if (index == 0) {
        // console.log(arr);
        arr.splice(0, 1);
        // console.log(arr);
        continue;
      }
      arr.splice(index, 1, arr[index - 1]);
      index = index - 2;
    } else if (currentValue === "--double-next") {
      if (index == arr.length - 1) {
        // console.log(arr);
        arr.splice(arr.length - 1, 1);
        // console.log(arr);
        continue;
      }
      // console.log(arr);
      arr.splice(index, 1, arr[index + 1]);
      // console.log(arr);
      index = index - 2;
    } else if (currentValue == "--discard-next") {
      if (index == arr.length - 1) {
        // console.log(arr);
        arr.splice(arr.length - 1, 1);
        // console.log(arr);
        continue;
      }
      // console.log(arr);
      arr.splice(index, 2);
      // console.log(arr);
      index = index - 2;
    }
  }
  return arr;
};
