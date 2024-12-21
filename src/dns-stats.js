const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObj = {};
  let baseDomainArr = [];
  if (domains.length) {
    let i = 0;
    while (domains[0][i]) {
      i++;
    }
    let count = 0;
    do {
      let char = domains[0][i - 1];
      baseDomainArr.unshift(char);
      count++;
      i--;
    } while (domains[0][i] !== ".");
    let baseDomainStr = "";
    for (let i = 0; i < count; i += 1) {
      baseDomainStr += baseDomainArr[i];
    }
    domainObj[baseDomainStr] = 0;
    let domainArr = domains
      .map((elem) => elem.split(".").reverse())
      .sort((a, b) => a.length - b.length)
      .map((elem) => elem.join("."));
    domainArr.forEach((elem) => (domainObj[`.${elem}`] = 0));
    Object.keys(domainObj).forEach((el) => {
      domainArr.forEach((elem) => {
        if (`.${elem}`.includes(el)) domainObj[el] += 1;
      });
    });
  }
  return domainObj;
}

module.exports = {
  getDNSStats,
};
