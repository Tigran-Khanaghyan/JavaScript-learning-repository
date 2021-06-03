"use strict";

function calculateCombinations(n) {
  function isPrime(number, i = 2) {
    if (i * i > number) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return isPrime(number, ++i);
  }
  function iter(n, array) {
    if (n < array[0]) {
      let factors = array;
      function innerRecursion(iArr) {
        if (iArr.length === 0) {
          return factors;
        }
        const [first, ...rest] = iArr;
        let factor = rest.reduce((acc, item) => acc * item, 1);
        factors.push(first)
        factors.push(factor * first)
        return innerRecursion(rest);
      }
      return innerRecursion(array.slice(1));
    }
    for (let i = 2; i <= n; ++i) {
      if (isPrime(i)) {
        if (n % i === 0) {
          array.push(i);
          return iter(n / i, array);
        }
      }
    }
  }
  return iter(n, []);
}

console.log(calculateCombinations(16));
