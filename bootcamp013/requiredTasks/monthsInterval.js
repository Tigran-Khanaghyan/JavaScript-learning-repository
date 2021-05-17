"use strict";

/*The function should produce the same output even if dateStart is greater than dateEnd


let january = new Date(2017, 0, 1); let march = new
Date(2017, 2, 1); monthsInterval(january, march)

['January', 'February', March']

let december = new Date(2017, 11, 1); let january =
new Date(2018, 0, 1); monthsInterval(december,
january)

['January', 'December']

let january2017 = new Date(2017, 0, 1); let january2018
= new Date(2018, 0, 1); monthsInterval(january2017,
january2018)

['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November',
'December'] */

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);

function monthsInterval(dateStart, dateEnd) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let startDate = new Date(dateStart).getTime();
  let endDate = new Date(dateEnd).getTime();
  if (startDate > endDate) {
    startDate = new Date(dateEnd);
    endDate = new Date(dateStart);
  } else {
    startDate = new Date(dateStart);
    endDate = new Date(dateEnd);
  }
  let intervalMonths = [];
  let i = 0;
  while (startDate.getTime() - endDate.getTime() < 0) {
    startDate.setMonth(startDate.getMonth() + 1);
    intervalMonths.push(months[i]);
    ++i;
  }

  return intervalMonths;
}

console.log(monthsInterval(january2017, january2018));
