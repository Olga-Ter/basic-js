const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitArr = [];
  for (let i = 0; i < n.toString().length; i++) {
    let tempArr = Array.from(n.toString());
    tempArr.splice(i, 1);
    digitArr.push(+tempArr.join(""));
  }
  digitArr.sort(function (a, b) {
    return a - b;
  });

  return digitArr[digitArr.length - 1];
}

module.exports = {
  deleteDigit,
};
