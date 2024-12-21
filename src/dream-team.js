const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = [];
  let isStr = false;
  let i = 0;
  if (members) {
    if (members.length) {
      while (!isStr && i < members.length) {
        if (typeof members[i] === "string") isStr = true;
        i += 1;
      }
      if (isStr) {
        for (let i = 0; i < members.length; i += 1) {
          if (typeof members[i] === "string" && members[i]) {
            name.push(members[i].trim().at(0).toUpperCase());
          }
        }
        name = name.sort().join("");
      }
    } else name = false;
  } else name = false;
  return name;
}

module.exports = {
  createDreamTeam,
};
