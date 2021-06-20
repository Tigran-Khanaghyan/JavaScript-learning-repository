"use strict";

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const images = document.querySelectorAll(".picture");
let imageSequence = 0;
let zIndex = 1;

rightArrow.addEventListener("click", () => {
  if (imageSequence === images.length - 1) {
    imageSequence = 0;
    images.forEach((item) => {
      item.style.zIndex = 0;
    });
    images[imageSequence].style.zIndex = zIndex;
    return;
  }
  ++zIndex;
  ++imageSequence;
  images[imageSequence].style.zIndex = zIndex;
});

leftArrow.addEventListener("click", () => {
  if (imageSequence === 0) {
    imageSequence = images.length - 1;
    images.forEach((item) => {
      item.style.zIndex = 0;
    });
    images[imageSequence].style.zIndex = zIndex;
    return;
  }
  ++zIndex;
  --imageSequence;
  images[imageSequence].style.zIndex = zIndex;
});

document.onkeydown = function(event) {
  switch(event.keyCode){
    case 39: if (imageSequence === images.length - 1) {
      imageSequence = 0;
      images.forEach((item) => {
        item.style.zIndex = 0;
      });
      images[imageSequence].style.zIndex = zIndex;
      return;
    }
    ++zIndex;
    ++imageSequence;
    images[imageSequence].style.zIndex = zIndex;
    break;
    case 37: if (imageSequence === 0) {
      imageSequence = images.length - 1;
      images.forEach((item) => {
        item.style.zIndex = 0;
      });
      images[imageSequence].style.zIndex = zIndex;
      return;
    }
    ++zIndex;
    --imageSequence;
    images[imageSequence].style.zIndex = zIndex;
    break;
  }
  
}
