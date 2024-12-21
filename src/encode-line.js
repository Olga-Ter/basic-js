const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = "";
  if (!str) newStr = "";
  else {
    let i = 1;
    let count = 1;
    while (str[i]) {
      if (str[i - 1] === str[i]) {
        count += 1;
        i += 1;
      } else {
        count === 1
          ? (newStr = newStr + str[i - 1])
          : (newStr = newStr + count + str[i - 1]);
        count = 1;
        i += 1;
      }
    }
    if (count === 1) newStr += str[i - 1];
    else newStr = newStr + count + str[i - 1];
  }
  return newStr;
}

module.exports = {
  encodeLine,
};
