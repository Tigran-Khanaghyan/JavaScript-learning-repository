"use strict";

/*Write a function that calculates sum, difference, multiplication and division between given array elements
depending on passed operation symbol. Write appropriate function for each operation. */

let array = [5, 17, 97, -8, 25, -42];
let operators = ["+", "-", "*", "/"];

function sum(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

function difference(arr) {
  let dif = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    dif -= arr[i];
  }
  return dif;
}

function multiply(arr) {
  let product = 1;
  for (let item of arr) {
    product *= item;
  }
  return product;
}

function division(arr) {
  let div = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    div /= arr[i];
  }
  return div;
}

for (let operator of operators) {
  switch (operator) {
    case "+":
      console.log(sum(array));
      break;
    case "-":
      console.log(difference(array));
      break;
    case "*":
      console.log(multiply(array));
      break;
    case "/":
      console.log(division(array));
      break;
  }
}
