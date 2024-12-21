const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  len: "",
  getLength() {
    if (this.len) return this.len.split("~~").length;
    else return 0;
  },
  addLink(value = "") {
    if (this.len === "") this.len = this.len + `( ${value} )`;
    else {
      this.len = this.len + `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position > 0 &&
      position <= this.len.split("~~").length
    ) {
      this.len = this.len
        .split("~~")
        .toSpliced(position - 1, 1)
        .join("~~");
      return this;
    } else {
      this.len = "";
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.len = this.len.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    let inputStr = this.len;
    this.len = "";
    return inputStr;
  },
};

module.exports = {
  chainMaker,
};
