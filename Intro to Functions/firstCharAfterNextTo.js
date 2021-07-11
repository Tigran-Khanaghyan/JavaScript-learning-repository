"use strict";

/*Write a function to compute a new string from the given one by moving the first char to come after the
next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
any group of fewer than 3 chars at the end.
Input Output
“dfgjkloyp” “fgdkljypo”
“aweyoolp” “weaooylp” */

function firstCharAfterNextTo(str) {
  let thirdLetterArray = [];
  let twoLettersArray = [];
  let newStrArray = [];

  for (let i = 0; i < str.length; i += 3) {
    thirdLetterArray.push(str[i]);
    str = str.replace(str[i], "*");
  }

  twoLettersArray = str.split("*");
  twoLettersArray.shift();
  for (let i = 0; i < twoLettersArray.length; ++i) {
    newStrArray.push(twoLettersArray[i]);
    newStrArray.push(thirdLetterArray[i]);
  }

  return newStrArray.join("");
}

console.log(firstCharAfterNextTo("dfgjkloyp"));
