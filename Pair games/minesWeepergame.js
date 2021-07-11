"use strict";

let size = 6;

function gameDesk(size) {
  let matrix = [];
  for (let i = 0; i < size; ++i) {
    let array = [];
    for (let j = 0; j < size; ++j) {
      array.push("*");
    }
    matrix.push(array);
  }
  let bombsPosition = positionsOfBombs(size);
  for (let array of bombsPosition) {
    matrix[array[0]][array[1]] = "B";
  }

  return matrix;
}

function positionsOfBombs(size) {
  let countOfBombs = Math.floor(size / 2);
  let matrix = [];
  for (let i = 0; i < countOfBombs; ++i) {
    let array = [];
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);
    array.push(x);
    array.push(y);
    matrix.push(array);
  }
  return matrix;
}

function makeMove(size) {
  let x = Math.floor(Math.random() * size);
  let y = Math.floor(Math.random() * size);
  return [x, y];
}

function runMinesWeeper(size) {
  let newDesk = gameDesk(size);
  let gameWinCount = Math.floor(size / 2);
  while (true) {
    let isOver = false;

    let move = makeMove(size);
    if (newDesk[move[0]][move[1]] === "B") {
      newDesk[move[0]][move[1]] = "C";
      isOver = true;
    } else if (newDesk[move[0]][move[1]] !== "B") {
      newDesk[move[0]][move[1]] = "M";
      ++gameWinCount;
    }
    if (gameWinCount === size * size) {
      return "Yoy won the game!";
    } else if (isOver) {
      console.log(
        `You crashed! You make  ${gameWinCount - Math.floor(size / 2)} moves`
      );
      return newDesk;
    }
  }
}

console.log(runMinesWeeper(size));
