const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let str = "";
  if (!date) {
    str = "Unable to determine the time of year!";
    return str;
  } else if (!isNaN(Date.parse(date)) && date[Symbol.toStringTag] !== "Date") {
    switch (date.getMonth()) {
      case 0:
      case 1:
      case 11:
        str = "winter";
        break;
      case 2:
      case 3:
      case 4:
        str = "spring";
        break;
      case 5:
      case 6:
      case 7:
        str = "summer";
        break;
      case 8:
      case 9:
      case 10:
        str = "autumn";
        break;
      default:
        throw new Error("Invalid date!");
    }
    return str;
  } else throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};
