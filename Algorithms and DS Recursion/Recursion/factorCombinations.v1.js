"use strict";

function combinationOfFactors(number, first = 2, eachProd = 1, dividers = []) {
  if (first > number || eachProd > number) return;
  if (eachProd === number) return console.log(...dividers);
  for (let i = first; i < number; i++) {
    if (number % i === 0) {
      dividers.push(i);
      combinationOfFactors(number, i, eachProd * i, dividers);
      dividers.pop();
    }
  }
}
combinationOfFactors(16);
