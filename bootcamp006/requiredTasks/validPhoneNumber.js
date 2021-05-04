"use strict";

/*Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
If the phone number is less than 10 digits assume that it is a bad number
If the phone number is longer than 10, then it is a bad number
If the phone number is 10 digits assume that it is good
If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a bad number.
Ignore spaces between digits.
Input Output
“455678” “Bad number”
“339 5656888” “3395656888”
“+0008989562” “0008989562”
“45231489562” “Bad number”
“123+2356897452” “Bad number” */

function cleanPhoneNumber(str) {
  let newStr = "";
  let isPlus = false;
  for (let char of str) {
    if (char !== " " && (Number(char) || Number(char) === 0)) {
      newStr += char;
    }
  }
  for (let i = 1; i < str.length; ++i) {
    if (str[i] === "+") {
      isPlus = true;
    }
  }
  if (newStr.length !== 10) {
    return "Bad number";
  } else if (newStr.length == 10 && !str.includes("+")) { 
    return newStr;
  } else if (str[0] === "+" && newStr.length == 10 && isPlus === false) {
    return newStr;
  } else if (isPlus) {
    return "Bad number";
  }
}

console.log(cleanPhoneNumber("123+2356897452"));
