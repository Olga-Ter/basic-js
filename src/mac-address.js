const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let baseArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let posArr = [2, 5, 8, 11, 14];
  let answer = false;
  for (let i = 0; i < n.length; i += 1) {
    console.log(n[i]);
    if (!posArr.includes(i) && baseArr.includes(n[i])) answer = true;
    else if (posArr.includes(i) && n[i] === "-") answer = true;
    else {
      answer = false;
      break;
    }
  }
  return answer;
}
module.exports = {
  isMAC48Address,
};
