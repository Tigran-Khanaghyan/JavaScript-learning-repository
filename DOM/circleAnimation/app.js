"use strict";
let blow = document.querySelector("button");

blow.addEventListener(
  "click",
  () => showCircle(150, 150, 100, (div) => {
    div.classList.add("circle-message");
    div.append("Hello, world!");
  })
);

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement("div");
  div.style.top = cx + "px";
  div.style.left = cy + "px";
  div.style.width = 0;
  div.style.height = 0;
  div.className = 'circle'
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";

    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  });
}
