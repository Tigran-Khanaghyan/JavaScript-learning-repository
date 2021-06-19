"use strict";

const addItemBtn = document.querySelector(".input-button");
let inputField = document.querySelector(".input-field");
const todoItem = document.querySelector(".todo-item");
let list = document.querySelector(".input-content");
const clearButton = document.querySelector(".clear-button");
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

clearButton.addEventListener("click", function clear() {
  let toDoes = document.querySelectorAll(".todo-item");
  toDoes.forEach((item) => {
    if (item.classList.length === 2) {
      item.remove();
      items.length = 0;
      itemsQuantity = 0;
    }
  });
});

function addEventOnCheckIcon(array, id) {
  array.forEach((item) => {
    if (item.id === id) {
      for (let i = 0; i < item.newItem.childNodes.length; ++i) {
        if (item.newItem.childNodes[i].className === "icons") {
          let checkIcon =
            item.newItem.childNodes[i].querySelector(".check-icon");
          let editIcon = item.newItem.childNodes[i].querySelector(".edit-icon");
          let closeIcon =
            item.newItem.childNodes[i].querySelector(".close-icon");
          checkIcon.addEventListener("click", () => {
            let classes = item.newItem.classList;
            let p = document.querySelector(`.${classes[1]} p`);
            p.style.color = "green";
          });
          editIcon.addEventListener("click", () => {
            let text = item.newItem.childNodes[1].textContent;
            let dynamicInput = document.createElement("input");
            dynamicInput.setAttribute("type", "text");
            dynamicInput.setAttribute("class", "dynamic-input");
            let p = item.newItem.childNodes[1];
            p.parentNode.replaceChild(dynamicInput, p);
            dynamicInput.value = text;
            let dynamicInputValue = "";
            dynamicInput.addEventListener("input", (event) => {
              dynamicInputValue = event.target.value;
            });
            document.body.addEventListener("mousedown", function addP(event) {
              if (event.target !== dynamicInput) {
                let p = document.createElement("p");
                if (!dynamicInputValue) {
                  p.textContent = text;
                } else {
                  p.textContent = dynamicInputValue;
                }
                dynamicInput.parentNode.replaceChild(p, dynamicInput);
                document.body.removeEventListener("mousedown", addP);
              }
            });
          });
          closeIcon.addEventListener("click", () => {
            item.newItem.remove();
            --itemsQuantity;
          });
        }
      }
    }
  });
}
