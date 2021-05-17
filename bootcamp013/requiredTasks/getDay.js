"use strict";

/*Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", or "Saturday".
To illustrate, the day of the week for "12/07/2016" is "Wednesday". */

function getDay(str) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let array = str.split("/");
  let date = new Date(array[2], array[0] - 1, array[1]);

  return weekDays[date.getDay()];
}

console.log(getDay("12/07/2016"));
