const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChar = 0;
  let commonObj = {};
  for (let key of s1) {
    if (commonObj[key]) commonObj[key]++;
    else commonObj[key] = 1;
  }
  for (let key of s2) {
    if (commonObj[key] > 0) {
      commonObj[key]--;
      commonChar++;
    } else delete commonObj[key];
  }
  return commonChar;
}

module.exports = {
  getCommonCharacterCount,
};
