const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false; }

  let firstLetterForElem = members.filter(element => typeof element === 'string')
                                  .map(element => element.trim().toUpperCase()[0])
                                  .sort().join('')

    return firstLetterForElem
};
