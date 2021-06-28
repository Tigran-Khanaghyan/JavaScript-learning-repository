"use strict";

let url = new URL("https://dog.ceo/api/breed/hound/images");
let dogsType = document.querySelector("#dogs");
let main = document.querySelector('.container')

async function getDogImage(url) {
  let response = await fetch(url);
  return await response.json();
}

getDogImage(url).then((data) => {
  let images = Object.values(data)[0];

  dogsType.addEventListener("change", (event) => {
    let oldDiv = document.querySelector(".img-container");
    if (oldDiv) {
      oldDiv.remove();
    }

    let div = document.createElement("div");
    div.classList.add("img-container");

    images.forEach((dogImgLink) => {
      if (dogImgLink.includes(event.target.value)) {
        let img = document.createElement("img");
        img.src = dogImgLink;
        div.append(img);
        main.append(div)
      }
    });
  });
});
