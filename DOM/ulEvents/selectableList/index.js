"use strict";

let ul = document.querySelector("#ul");
let set = new Set();

ul.addEventListener("click", (event) => {
  let target = event.target;
  if (target && target.nodeName === "LI" && !event.ctrlKey) {
    if (set.has(target)) {
      set.delete(target);
    }
    target.classList.add("selected");
    set.forEach((item) => {
      item.classList.remove("selected");
    });
    set.add(target);
  }
  if (target && target.nodeName === "LI" && event.ctrlKey) {
    target.classList.add("selected");
  }
});

ul.addEventListener('mousedown', () => {
    return false
})
