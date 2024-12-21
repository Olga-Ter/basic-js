const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alfa = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    let str = "";
    if (!message || !key) throw new Error("Incorrect arguments!");
    else {
      let i = 0;
      let j = 0;
      for (; i < message.length; i += 1) {
        if (this.alfa.includes(message[i].toUpperCase())) {
          str +=
            this.alfa[
              (this.alfa.indexOf(message[i].toUpperCase()) +
                this.alfa.indexOf(key[j % key.length].toUpperCase())) %
                26
            ];
          j += 1;
        } else str += message[i];
      }
      if (this.direction === false) str = str.split("").reverse().join("");
      return str;
    }
  }
  decrypt(encryptedMessage, key) {
    let str = "";
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    else {
      let i = 0;
      let j = 0;
      for (; i < encryptedMessage.length; i += 1) {
        if (this.alfa.includes(encryptedMessage[i])) {
          if (
            this.alfa.indexOf(encryptedMessage[i]) -
              this.alfa.indexOf(key[j % key.length].toUpperCase()) <
            0
          )
            str +=
              this.alfa[
                this.alfa.indexOf(encryptedMessage[i]) -
                  this.alfa.indexOf(key[j % key.length].toUpperCase()) +
                  26
              ];
          else
            str +=
              this.alfa[
                this.alfa.indexOf(encryptedMessage[i]) -
                  this.alfa.indexOf(key[j % key.length].toUpperCase())
              ];
          j += 1;
        } else str += encryptedMessage[i];
      }
      if (this.direction === false) str = str.split("").reverse().join("");
      return str;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
