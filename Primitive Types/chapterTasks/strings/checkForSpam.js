"use strict";

//Write a function checkSpam(str) that returns true if str contains
//‘viagra’ or ‘XXX’, otherwise false

function checkSpam(str) {
  let newStr = str.toLowerCase();
  if (newStr.includes("viagra") || newStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("dsfsdgviagra"));
