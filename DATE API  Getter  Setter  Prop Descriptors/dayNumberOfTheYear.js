"use strict";

/*Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
month/day/year,return the day-number of the year. All input strings in the tests are valid dates.
Input Output
dayOfYear("12/13/2020") 348
dayOfYear("12/17/2020") 352
dayOfYear("11/16/2020") 321
dayOfYear("1/9/2019") 9
dayOfYear("3/1/2004") 61
dayOfYear("12/31/2000") 366 */

function dayOfYear(str) {
  let array = str.split("/");
  let date = new Date(+array[2], +array[0] - 1, +array[1]);
  let startOfYear = new Date(array[2], 0, 0);
  let i = 0;
  while (startOfYear - date !== 0) {
    startOfYear.setDate(startOfYear.getDate() + 1);
    ++i;
  }
  return i;
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("3/1/2004"));
