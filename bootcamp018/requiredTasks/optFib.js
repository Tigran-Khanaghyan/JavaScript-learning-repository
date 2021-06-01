"use strict";

function optFib(n) {
  let prev = 0;
  let next = 1;
  let current = prev + next;
  function iter(prev, next, n) {
    if (n === 0) {
      return prev;
    } else if (n === 1) {
      return next;
    }

    prev = next;
    next = current;
    current = prev + next;
    return iter(prev, next, --n);
  }
  return iter(prev, next, n);
}
console.log(optFib(100)); // 0, 1, 1, 2, 3, 5
