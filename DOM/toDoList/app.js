"use strict";

const addItemBtn = document.querySelector(".input-button");
let inputField = document.querySelector(".input-field");
const todoItem = document.querySelector(".todo-item");
let list = document.querySelector(".input-content");
let items = [];
let inputFieldValue = "";
let itemsQuantity = 0;

inputField.addEventListener("input", (event) => {
  inputFieldValue = event.target.value;
});

addItemBtn.addEventListener("click", () => {
  itemsQuantity++;
  let newItem = todoItem.cloneNode(true);
  newItem.children[0].textContent = ` ${itemsQuantity}.${inputFieldValue}`;
  newItem.style.visibility = "visible";
  newItem.classList.add("item" + itemsQuantity);
  list.append(newItem);
  let id = Math.random();
  let itemObj = { id, newItem };
  items.push(itemObj);
  addEventOnCheckIcon(items, id);
  inputField.value = "";
  inputFieldValue = "";
});

function addEventOnCheckIcon(array, id) {
  array.forEach((item) => {
    if (item.id === id) {
      let text = item.newItem.childNodes[1];
      for (let i = 0; i < item.newItem.childNodes.length; ++i) {
        if (item.newItem.childNodes[i].className === "icons") {
          let checkIcon =
            item.newItem.childNodes[i].querySelector(".check-icon");
          let editIcon = item.newItem.childNodes[i].querySelector(".edit-icon");
          let closeIcon =
            item.newItem.childNodes[i].querySelector(".close-icon");
          checkIcon.addEventListener("click", () => {
            text.style.color = "green";
          })
        }
      }
    }
  });
}
