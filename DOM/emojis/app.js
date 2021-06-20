"use strict";

let pTags = document.querySelectorAll("p");

function appearEmojis(pTags) {
  pTags.forEach((item) => {
    let words = item.textContent.split(" ");
    words.forEach((word) => {
      let index = words.indexOf(word);

      if (word.includes("?")) {
        word = word.replaceAll("?", "&#x1F914");
        let newWord = "<span>" + word + "</span>";
        words[index] = newWord;
      }
      if (word.includes("!")) {
        word = word.replaceAll("!", "&#128562");
        let newWord = "<span>" + word + "</span>";
        words[index] = newWord;
      }
    });
    words = words.join(" ");
    item.innerHTML = words;
  });
}
appearEmojis(pTags)
let spans = document.querySelectorAll("p span")

setInterval(() => {
    spans.forEach((span) => {
        span.classList.toggle("hidden");
      });
}, 1000)