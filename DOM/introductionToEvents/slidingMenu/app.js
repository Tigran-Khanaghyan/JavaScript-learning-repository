'use strict'

let img = document.querySelector('img')
let ul = document.querySelector('ul')

img.addEventListener('click', () => {
    ul.hidden = !ul.hidden
})