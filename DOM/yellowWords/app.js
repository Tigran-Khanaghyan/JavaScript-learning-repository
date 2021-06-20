"use strict";

let pTags = document.querySelectorAll("p");


pTags.forEach((item) => {
    let words = item.textContent.split(' ')
    words.forEach((word) => {
        if(word.length >= 8){
            let newWord = '<span>' + word + "</span>"
            let index = words.indexOf(word)
            words[index] = newWord
        }
    })
    words = words.join(' ')
    item.innerHTML = words
})

