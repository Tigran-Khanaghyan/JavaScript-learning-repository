"use strict";

let container = document.querySelector("#container");

container.addEventListener("click", function removeElem(event) {
  let removeButton = document.querySelector(".remove-button");
  if (event.target !== removeButton) {
    return;
  }
  removeButton.closest(".pane").remove();
});
