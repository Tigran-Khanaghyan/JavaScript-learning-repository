"use strict";

/*Write the function random(min, max) to 
generate a random floating-point number from min to max (not including max). */

function random(min, max) {
  return min + Math.random() * (max - min);
}
