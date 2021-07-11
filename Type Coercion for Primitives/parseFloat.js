"use strict";

// let str = "        0007.77";
// let numberStr = ''
// let numberWithPoint = ''
// let point = false;
// let zero = true;
// let numberFloat = str.trim()

// if(numberFloat === ""){
//     numberStr = NaN
// }else{
//     for(let char of numberFloat){

//         if(Number(char) && (point === false)){
//             numberStr += char
//             zero = false;
//         }else if(char === '0' && p){
//             if(!numberStr) numberWithPoint = '0'
//             if(numberStr && (point === false)) numberStr += char
//             else continue
//         }else if(char === '.'){
//             point = true;
//         }
//         else{
//             break;
//         }
//         if(point){
//             if(char === '.') numberWithPoint += char
//            else  if(char === '0'){
//                 numberWithPoint += char
//             }else if(Number(char)){
//                 numberWithPoint += char;
//             }
//         }
//     }
// }

// if(zero){
//     numberStr = '0'
// }else if(point && zero === false){
//     numberStr += numberWithPoint
// }

let str = "        0007.77";
let numberStr = str.trim();
let numberWithPoint = "";
let newStr = "";
let point = false;
let zero = true;
let zeroStr = false;
let isChar = false;

if (numberStr === "") {
  console.log(NaN);
} else {
  for (let char of numberStr) {
    if (point === false) {
      if (Number(char)) {
        newStr += char;
      } else if (char === "0") {
        zeroStr = true;
        if (newStr) {
          newStr += char;
        }
      } else if (!Number(char) && char !== ".") {
        isChar = true;
        break;
      } else if (char === ".") {
        point = true;
      } else {
        break;
      }
    } else {
      if (Number(char)) {
        numberWithPoint += char;
        zero = false;
      } else if (char === "0") {
        numberWithPoint += char;
      } else {
        break;
      }
    }
  }
}

if (point && zero === false) {
  if (newStr) newStr = newStr + "." + numberWithPoint;
  else newStr = "0" + "." + numberWithPoint;
} else if (zeroStr && isChar && !newStr) {
  newStr = "0";
}

console.log(parseFloat(str));
console.log(newStr);
