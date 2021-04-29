"use strict";

/*Write a program to check the validity of password input by users. Validation :
At least 1 letter between [a-z] and 1 letter between [A-Z].
At least 1 number between [0-9].
At least 1 character from [$#@].
Minimum length 6 characters.
Maximum length 16 characters.  Aaza1234566# “Valid” */

//let password = prompt("Enter a password", "")

let password = "Aaza1234566#";
let lowerCaseStr = "";
let capitalStr = "";
let numberStr = "0123456789";
let character = "$#@";
let passwordValidator = "";
let minLength = 6;
let maxLength = 16;
let isValid = true;
let isCapitalLetter = false;
let isLowerCase = false;
let isCharacter = false;
let isDigit = false;

for (let i = "a".codePointAt(0); i <= "z".codePointAt(0); ++i) {
  lowerCaseStr += String.fromCodePoint(i);
}
for (let i = "A".codePointAt(0); i <= "Z".codePointAt(0); ++i) {
  capitalStr += String.fromCodePoint(i);
}

if (password.length < minLength || password.length > maxLength) {
  isValid = false;
} else {
  for (let char of password) {
    if (lowerCaseStr.includes(char)) isLowerCase = true;
    else if (capitalStr.includes(char)) isCapitalLetter = true;
    else if (character.includes(char)) isCharacter = true;
    else if (numberStr.includes(char)) isDigit = true;
  }
}

if (isValid && isDigit && isLowerCase && isCharacter && isCapitalLetter) {
  console.log("The password is valid");
} else {
  console.log("The password is not valid");
}
