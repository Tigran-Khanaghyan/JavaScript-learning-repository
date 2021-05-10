"use strict";

const size = 3;
let newGameDesk = gameDesk(size);

function gameDesk(size) {
  let matrix = [];
  for (let i = 0; i < size; ++i) {
    let array = [];
    for (let j = 0; j < size; ++j) {
      array.push("-");
    }
    matrix.push(array);
  }
  return matrix;
}

function player1(x, y) {
  newGameDesk[x][y] = "X";
  return newGameDesk;
}
function player2(x, y) {
  newGameDesk[x][y] = "O";
  return newGameDesk;
}

function generatorX() {
  let x = Math.floor(Math.random() * size);
  return x;
}
function generatorY() {
  let y = Math.floor(Math.random() * size);
  return y;
}

function runTicTacToe() {
  let isPlayer1played = false;
  let gamOver = 0;

  while (true) {
    let x = generatorX();
    let y = generatorY();

    for (let array of newGameDesk) {
      let isPlayer1Win = 0;
      let isPlayer2Win = 0;
      for (let item of array) {
        if (item === "X") {
          ++isPlayer1Win;
        } else if (item === "O") {
          ++isPlayer2Win;
        }
      }
      if (isPlayer1Win === size) {
        return "Player 1 Won!";
      } else if (isPlayer2Win === size) {
        return "Player 2 won";
      }
    }

    for (let k = 0; k < size; ++k) {
      let newArray = [];
      let isPlayer1Win = 0;
      let isPlayer2Win = 0;
      for (let i = 0, j = k; i < size; ++i) {
        newArray.push(newGameDesk[i][k]);
      }
      for (let item of newArray) {
        if (item === "X") {
          ++isPlayer1Win;
        } else if (item === "O") {
          ++isPlayer2Win;
        }
      }
      if (isPlayer1Win === size) {
        return "Player 1 Won!";
      } else if (isPlayer2Win === size) {
        return "Player 2 won";
      }
    }
    if (gamOver === size * size) return "Draw";

    for (let i = 0; i < size; ++i) {
      let diagonal1 = [];
      let diagonal2 = [];
      let isPlayer1Win = 0;
      let isPlayer2Win = 0;
      for (let j = 0; j < size; ++j) {
        if (i === j) {
          diagonal1.push(newGameDesk[i][j]);
        }
        if (j === size - i) {
          diagonal2.push(newGameDesk[i][j]);
        }
      }
      if (isPlayer1Win === size) {
        return "Player 1 Won!";
      } else if (isPlayer2Win === size) {
        return "Player 2 won";
      }
    }

    if (newGameDesk[x][y] !== "-") {
      continue;
    } else if (isPlayer1played === false) {
      ++gamOver;
      isPlayer1played = true;
      player1(x, y);
      continue;
    }
    if (newGameDesk[x][y] !== "-") {
      continue;
    } else {
      ++gamOver;
      isPlayer1played = false;
      player2(x, y);
      continue;
    }
  }
}

console.log(runTicTacToe());
console.log(newGameDesk);
