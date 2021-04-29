"use strict";

/*Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
print the quotient, otherwise print the remainder.
Input Output
1233 ‘Quotient is 2.ʼ
5 ‘Quotient is 1.ʼ
0 ‘Cannot calculate.ʼ
455 ‘Remainders 2.ʼ */

let number = 12334;
let sum = 0;
let product = 1;

let str = String(number);

for (let digit of str) {
  product *= digit;
  sum = sum + +digit;
}

if (product / sum === 0) console.log(`Quotient is ${product / sum}`);
else console.log(`Remainder is ${Math.floor(product / sum)}`);
