const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function getMiddle(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let mid = Math.trunc(sum / arr.length);
    return mid;
  }

  let temparr = [];

  if (arr.includes(-1)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) temparr.push(arr[i]);
    }

    function quickSort(arr) {
      if (arr.length < 2) {
        return arr;
      } else {
        let middle = getMiddle(arr);
        let left = [];
        let right = [];
        for (let i = 0; i < arr.length; i++) {
          if (middle > arr[i]) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return quickSort(left).concat(quickSort(right));
      }
    }
    let temp = quickSort(temparr);
    temparr = [];
    let step = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        temparr[i] = temp[step];
        step++;
      } else {
        temparr[i] = arr[i];
      }
    }
  } else {
    temparr = arr.sort(function (a, b) {
      return a - b;
    });
  }
  return temparr;
}

module.exports = {
  sortByHeight,
};
