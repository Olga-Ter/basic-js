const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = new Array();
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix.push(new Array(matrix[0].length).fill(0));
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      let indexArr = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      let count = 0;
      indexArr.forEach((elem) => {
        if (
          elem[0] >= 0 &&
          elem[0] < matrix.length &&
          elem[1] >= 0 &&
          elem[1] < matrix[0].length &&
          matrix[elem[0]][elem[1]]
        )
          count += 1;
      });
      newMatrix[i][j] = count;
      count = 0;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper,
};
