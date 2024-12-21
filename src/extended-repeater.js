const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = "";
  if (typeof str !== "string") String(str);
  if (!options || !options.repeatTimes) {
    if (!options.addition) newStr = str;
    else newStr = str + options.addition;
  } else {
    if (typeof options.addition !== "string") String(options.addition);
    options.separator ??= "+";
    options.additionSeparator ??= "|";
    for (let i = 0; i < options.repeatTimes; i += 1) {
      newStr += str;
      if (!options.additionRepeatTimes && options.addition) {
        if (i < options.repeatTimes - 1)
          newStr += options.addition + options.separator;
        else newStr += options.addition;
      } else if (!options.additionRepeatTimes && !options.addition) {
        if (i < options.repeatTimes - 1) newStr += options.separator;
      } else {
        for (let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
          newStr += options.addition + options.additionSeparator;
        }
        if (i < options.repeatTimes - 1)
          newStr += options.addition + options.separator;
        else newStr += options.addition;
      }
    }
  }
  return newStr;
}

module.exports = {
  repeater,
};
