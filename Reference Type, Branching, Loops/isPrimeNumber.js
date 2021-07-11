"use strict";

/* Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise. 
Input Output 
401 ‘yesʼ 
63 ‘noʼ 
 */

let number = 4;
let isSimple = true;

for (let i = 2; i * i <= number; ++i) {
  if (number % i === 0) {
    isSimple = false;
    break;
  }
}
if (isSimple) console.log("Yes");
else console.log("No");
