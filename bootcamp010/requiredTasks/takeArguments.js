"use strict";

function sum(...args) {
  return args.reduce((sum, current) => {
    return (sum += current);
  }, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
