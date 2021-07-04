// "use strict";

// let tableRowsElem = document.querySelectorAll("tr td");
// let tableRows = document.querySelectorAll("tbody tr");
// let table = document.querySelector("#grid");
// let tbody = document.querySelector('tbody')
// let newTable = [];

// let ages = [];
// let names = [];
// tableRowsElem.forEach((item) => {
//   if (Number(item.textContent)) {
//     ages.push(Number(item.textContent));
//     return;
//   }
//   names.push(item.textContent);
// });

// ages.sort((a, b) => a - b);
// for (let i = 0; i < tableRows.length; ++i) {
//   for (let j = 0; j < ages.length; ++j) {
//     if (ages[i] === Number(tableRows[j].children[0].textContent)) {
//       newTable.push(tableRows[j]);
//     }
//   }
// }
// tbody.innerHTML = ''
// newTable.forEach((item) => {
//     tbody.append(item)
// })

let grid = document.querySelector("#grid");

grid.addEventListener("click", (event) => {
  if (event.target.nodeName !== "TH") {
    return;
  }
  let th = event.target;
  sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(colNum, type) {
  let tbody = document.querySelector("tbody");
  let rowsArray = Array.from(tbody.rows);
  let compare;

  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare)
  tbody.append(...rowsArray)
}
