"use strict";

/*Create a function randomInteger(min, max) that generates a random integer number
 from min to max including both min and max as possible values. */

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
