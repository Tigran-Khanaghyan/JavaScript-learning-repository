"use strict";

/*. Given two variables, which are the angles of a triangle. Find the third angle
 of the triangle. (Sum of the angles of a triangle equals 180 degrees). 
Input Output 
45, 90 45 
30, 30 120 
75, 25 80 
 */

let firstAngle = 45;
let secondAngle = 90;
let thirdAngle = 180 - firstAngle - secondAngle;
console.log(thirdAngle);
