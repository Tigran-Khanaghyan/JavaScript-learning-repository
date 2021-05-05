"use strict";

/*Given the list of the following readers:
Output the books sorted by the percent in descending order which readStatus is true. */

let array = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

function sortArray(arr) {
  let sortedArray = [];
  let sortedPercents = [];
  for (let obj of arr) {
    for (let key in obj) {
      if (key === "percent") {
        sortedPercents.push(obj[key]);
      }
    }
  }
  for (let i = 0; i < sortedPercents.length - 1; ++i) {
    for (let j = i + 1; j < sortedPercents.length; ++j) {
      if (sortedPercents[i] < sortedPercents[j]) {
        let temp = sortedPercents[i];
        sortedPercents[i] = sortedPercents[j];
        sortedPercents[j] = temp;
      }
    }
  }

  for (let item of sortedPercents) {
    for (let elem of arr) {
      if (item === elem.percent) {
        sortedArray.push(elem);
      }
    }
  }

  for (let obj of sortedArray) {
    if (obj.readStatus === true) {
      console.log(obj.book);
    }
  }
}

console.log(sortArray(array));
