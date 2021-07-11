"use strict";

/*Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
or phrase without a repeating letter.
 */

function isIsogram(str) {
  let repeatingCharacters = function () {
    let isRepeating = false;
    for (let i = 0; i < str.length - 1; ++i) {
      for (let j = i + 1; j < str.length; ++j) {
        if (str[i] === str[j]) {
          isRepeating = true;
          break;
        }
      }
    }
    return isRepeating;
  };
  if (repeatingCharacters() === true) {
    return "The word is not isogram";
  } else {
    return "The word is isogram";
  }
}

console.log(isIsogram("asf"));
