'use strict'

let messages = document.querySelectorAll('.pane')
let removeButton = document.querySelector('.remove-button')

let removeElement = function(){
    this.parentNode.style.display = 'none'
}

messages.forEach((message) => {
    let button = removeButton.cloneNode(true)
    message.style.position = 'relative'
    button.style.position = 'absolute'
    button.style.right = '5px';
    button.style.top = 0
    button.addEventListener('click', removeElement)
    message.prepend(button)
})
