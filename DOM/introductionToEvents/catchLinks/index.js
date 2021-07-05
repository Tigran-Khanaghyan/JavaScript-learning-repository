"use strict";

let field = document.querySelector("#contents");

field.addEventListener("click", (event) => {
  let target = event.target.closest('a')
  if(target && field.contains(target)){
    let isLiving = confirm("Do you want to leave this page?");
    if (!isLiving) event.preventDefault();
  }
  return 

});
