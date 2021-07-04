"use strict";

let tree = document.querySelector(".tree");
let lies = document.querySelectorAll("li");
lies.forEach((li) => {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener("click", function hideElem(event) {
  if (event.target.nodeName !== "SPAN") {
    return;
  }

  if (event.target.parentNode.children.length > 1) {
    event.target.parentNode.children[1].hidden =
      !event.target.parentNode.children[1].hidden;
  }
});
