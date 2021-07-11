"use strict";

/*Check whether string is palindrome, or not.*/

function isPolindrom(str) {
  let PolindromWord = function () {
    let isPolindrom = true;
    let i = 0;
    while (i !== Math.floor(str.length / 2)) {
      if (str[i] !== str[str.length - i - 1]) {
        isPolindrom = false;
      }
      ++i;
    }
    return isPolindrom;
  };
  if (PolindromWord() === false) {
    return "The word is not a polindrom";
  } else {
    return "The word is a polindrom";
  }
}

console.log(isPolindrom("asal"));
