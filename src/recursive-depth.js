const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1;
  currentDepth = 0;
  calculateDepth(arr) {
    console.log(this.depth);
    if (arr.some((element) => Array.isArray(element))) {
      console.log(arr.some((element) => Array.isArray(element)));
      this.depth += 1;
      console.log(this.depth);
      arr = arr.flat();
      console.log(arr);
      this.calculateDepth(arr);
    } else {
      this.currentDepth = this.depth;
      this.depth = 1;
    }
    return this.currentDepth;
  }
}

module.exports = {
  DepthCalculator,
};
