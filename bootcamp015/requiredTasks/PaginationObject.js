"use strict";

/*Write Pagination object that will get an array and pageSize, then will return the following.
prevPage
nextPage
firstPage
lastPage
goToPage
getPageItems */

let Pagination = {
  matrix: [],
  page: 0,
  init: function (array, size) {
    for (let i = 0; i < array.length; i += size) {
      Pagination.matrix.push(array.slice(i, i + size));
    }
  },
  getPageItems: function () {
    console.log(Pagination.matrix[Pagination.page]);
  },

  nextPage: function () {
    ++Pagination.page;
    return Pagination;
  },
  prevPage: function () {
    --Pagination.page;
    return Pagination;
  },
  firstPage: function () {
    console.log(Pagination.matrix[0]);
  },
  lastPage: function () {
    console.log(Pagination.matrix[Pagination.matrix.length - 1]);
  },
  goToPage: function (n) {
    console.log(Pagination.matrix[n]);
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.prevPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.lastPage();
Pagination.goToPage(3); // current page must be set to 3
