"use strict";

//Create a function getDateAgo(date, days) to return the day of month days ago from the date.

let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date;
}

console.log(getDateAgo(date, 2));
