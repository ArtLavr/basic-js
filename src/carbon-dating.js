const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === null || typeof sampleActivity !== "string" || /[A-Za-z]/.test(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false
  }
  let approximateAgeC14 = Math.ceil(Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  return approximateAgeC14
  // remove line with error and write your code here
};
