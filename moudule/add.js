const numberchecker = require("./number-checker");

//부품으로 내보낸다.
//add.js는 객체다

  module.exports = function (firest, second) {
    if (numberchecker(firest) === true) {
      return firest + second;
    }
  }
