"use strict";

let login = prompt("Enter a login", "");
let password = null;

if (login === "Admin") {
  password = prompt("Enter a password", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (login === "" || login === null) {
  alert("Cancelled");
} else {
  alert("I don`t know you");
}
