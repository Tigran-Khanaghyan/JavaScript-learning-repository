"use strict";

/*Write a function to find longest substring in a given string without repeating characters except space
character. If there are several,return the last one. Consider that all letters are lowercase.
Input Output
“there are no two words in the english language more harmful than "good job".” “rmful than “go”
“parting your soup is not a miracle, bruce.” */

let str =
  'there are no two words in the english language more harmful than "good job"';

function nonRepeatingCharacters(str) {
  let subArray = [];
  for (let i = 0; i < str.length; ++i) {
    let tempStr = "";
    for (let j = i; j < str.length; ++j) {
      if (!tempStr.includes(str[j]) || str[j] == " ") {
        tempStr += str[j];
      } else {
        subArray.push(tempStr);
        break;
      }
    }
  }
  let maxLengthWord = subArray[0];
  for (let item of subArray) {
    if (item.length >= maxLengthWord.length) {
      maxLengthWord = item;
    }
  }
  return maxLengthWord;
}
console.log(nonRepeatingCharacters(str));
