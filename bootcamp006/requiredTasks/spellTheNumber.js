"use strict";

/*Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.
Input Output
5 ‘fiveʼ
25 ‘twenty fiveʼ
425 “four hundred twenty five”
9425 “nine thousand four hundred twenty five”
79425 “seventy nine thousand four hundred twenty five”
179425 “one hundred seventy nine thousand four hundred twenty five” */

function small100(number) {
  let small100 = "";
  let baseNumbers = [
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
  ];
  if (number < 100) {
    if (number < 20) {
      small100 = baseNumbers[number];
    } else if (number >= 20 && number < 30) {
      if (number === 20) small100 = baseNumbers[1][0];
      else small100 = baseNumbers[1][0] + " " + baseNumbers[0][number % 10];
    } else if (number >= 30 && number < 40) {
      if (number === 30) small100 = baseNumbers[1][1];
      else small100 = baseNumbers[1][1] + " " + baseNumbers[0][number % 10];
    } else if (number >= 40 && number < 50) {
      if (number === 40) small100 = baseNumbers[1][2];
      else small100 = baseNumbers[1][2] + " " + baseNumbers[0][number % 10];
    } else if (number >= 50 && number < 60) {
      if (number === 50) small100 = baseNumbers[1][3];
      else small100 = baseNumbers[1][3] + " " + baseNumbers[0][number % 10];
    } else if (number >= 60 && number < 70) {
      if (number === 60) small100 = baseNumbers[1][4];
      else small100 = baseNumbers[1][4] + " " + baseNumbers[0][number % 10];
    } else if (number >= 70 && number < 80) {
      if (number === 70) small100 = baseNumbers[1][5];
      else small100 = baseNumbers[1][5] + " " + baseNumbers[0][number % 10];
    } else if (number >= 80 && number < 90) {
      if (number === 80) small100 = baseNumbers[1][6];
      else small100 = baseNumbers[1][6] + " " + baseNumbers[0][number % 10];
    } else if (number >= 90 && number < 100) {
      if (number === 90) small100 = baseNumbers[1][7];
      else small100 = baseNumbers[1][7] + " " + baseNumbers[0][number % 10];
    }
  } else if (number >= 100 && number < 1000) {
  }
  return small100;
}
function small1000(number) {
  let decimal = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let hundred = "hundred";
  let small1000 = "";
  if (number >= 100 && number < 200) {
    if (number == 100) small1000 = hundred;
    else {
      small1000 = decimal[Math.floor(number / 100) - 1] + " " + hundred;
      number -= 100;
      let tempNumber = small100(number);
      small1000 = small1000 + " " + tempNumber;
    }
  }
  return small1000;
}
function spellTheNumber(number) {
  let numbers = [];
  let numStr = "";
  let small1000 = "";
  let small10000 = "";
  let small100000 = "";
  let small1000000 = "";

  let baseNumbers = [
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ],
    ["hundred", "thousand"],
  ];

  return small100;
}

console.log(small1000(156));
