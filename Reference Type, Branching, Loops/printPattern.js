"use strict";

/*Print the following pattern:
1 
2 6
3 7 10
4 8 11 13
5 9 12 14 15 */

//1 2 6 3 7 10 4 8 11 13 5 9 12 14 15

for (let i = 1; i <= 5; i++) {
  let current = i;
  let txt = "";
  let step = 4;
  for (let k = 0; k < i; k++) {
    txt += `${current} `;
    current += step;
    step--;
  }
  console.log(txt);
}
