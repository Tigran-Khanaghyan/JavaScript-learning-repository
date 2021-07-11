"use strict";

// Implement following function

const getWeekOfMonth = (date) => {
  let dayOfMonth = date.getDate();
  let i = 1;
  let weekOfMonth = 1;
  while (i < dayOfMonth) {
    if (i % 7 === 0) {
      ++weekOfMonth;
    }
    ++i;
  }
  return weekOfMonth;
};
const result = getWeekOfMonth(new Date(2017, 10, 9));
// => 2

console.log(result);
