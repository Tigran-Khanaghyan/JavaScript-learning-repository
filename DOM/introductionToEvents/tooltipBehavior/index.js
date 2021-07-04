"use strict";

let tooltipElem;

document.addEventListener('mouseover', (event) => {
    let target = event.target

    let tooltipHtml = target.dataset.tooltip
    if(!tooltipHtml) return 
    
    tooltipElem = document.createElement('div')
    tooltipElem.classList.add('tooltip')
    tooltipElem.innerHTML = tooltipHtml
    document.body.append(tooltipElem)

    let coords = target.getBoundingClientRect()

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if(top < 0) {
        top = coords.top + tooltipElem.offsetHeight + 5
    }

    tooltipElem.style.top = top +'px'
    tooltipElem.style.left = left + 'px'
    
})

document.addEventListener('mouseout' , () => {
    if(tooltipElem){
        tooltipElem.remove()
    }
})