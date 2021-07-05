'use strict'

let img = document.querySelector('#largeImg')
let thumbs = document.querySelector('#thumbs')

thumbs.addEventListener('click',  (event) => {
    let target = event.target.closest('a')
    if(target && thumbs.contains(target)){
        event.preventDefault()
        img.src = target.href
    }
})