"use strict";

let str = ")))((()))((()(";

function balanceParentheses(str) {
  let strArray = str.split("");
  let stack = [];

  let arrayCount = 0;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") {
      delete strArray[i];
      stack.push(str[i]);
    } else if (stack.length !== 0) {
      stack.pop();
      delete strArray[i];
    }
  }
  for (let item of strArray) {
    if (item !== undefined) {
      ++arrayCount;
    }
  }
  if (arrayCount === stack.length) {
    return arrayCount;
  } else {
    return false;
  }
}

console.log(balanceParentheses(str));
