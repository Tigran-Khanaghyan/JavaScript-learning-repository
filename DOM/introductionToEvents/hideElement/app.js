"use strict";

let hideBtn = document.querySelector(".hide");

hideBtn.addEventListener("click", {
  handleEvent() {
    let text = document.querySelector(".hide-me");

    text.hidden = 'true'
  },
});
hideBtn.addEventListener('dblclick', () => {
    hideBtn.hidden = 'true'
})
