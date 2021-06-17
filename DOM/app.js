"use strict";

let email = document.querySelector("#email");
let phonNumber = document.querySelector("#phone");
let password = document.querySelector('#password')
let infoBtn = document.querySelector("#button");
let infoMessage = document.querySelector(".message");

let isValidPhoneNumber = false;
let isValidEmail = false;
let isValidPassword = false;

email.addEventListener("input", (event) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isEmail = regex.test(String(event.target.value).toLowerCase());
  let error = document.querySelector(".email");
  if (isEmail === false) {
    error.style.display = "block";
  } else {
    isValidEmail = true;
    error.style.display = "none";
  }
});

phonNumber.addEventListener("input", (event) => {
  let regex = /^\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\s[0-9]{3}$/;
  let isPhonNumber = regex.test(String(event.target.value));
  let error = document.querySelector(".phone");
  if (isPhonNumber === false) {
    error.style.display = "block";
  } else {
    isValidPhoneNumber = true;
    error.style.display = "none";
  }
});

password.addEventListener('input', (event) => {
    let input = String(event.target.value)
    let regex = /(\d+)([A-Z]+)([a-z]+)|(\d+)([a-z]+)([A-Z]+)|([A-Z]+)([a-z]+)(\d+)|([A-Z]+)(\d+)([a-z]+)|(([a-z]+)([A-Z]+)(\d+))|(([a-z]+)(\d+)([A-Z]+))/
    let isValid = regex.test(input)
    let error = document.querySelector('.password')
    if(input.length < 7 || isValid === false){
        error.style.display = 'block'
    }else{
        isValidPassword = true;
        error.style.display = 'none'
        let one = document.querySelector('.one')
        one.style.display = 'block'
        let symbols = "~!@#$%^&*()_+?*".split('')
        if(input.length > 7){
            
            let isSymbol = symbols.find((symbol) => input.includes(symbol))
            if(isSymbol){
                let two = document.querySelector('.two')
                two.style.display = 'block'
            }
            if(input.length > 10){
                let symbolsCount = 0
                let tempInput = Array.from(input)
                tempInput.forEach((element) => {
                    if(symbols.includes(element)){
                        symbolsCount++;
                    }
                })
                if(symbolsCount >= 2){
                    let three = document.querySelector('.three')
                    three.style.display = 'block'
                }
            }
        }
    }
})

infoBtn.addEventListener("click", () => {
  if (isValidPhoneNumber && isValidEmail && isValidPassword) {
    infoMessage.style.display = "block";
  }
});

document.addEventListener("mousedown", (event) => {
  let clickedElem = event.target;
  if (clickedElem !== infoMessage) {
    infoMessage.style.display = "none";
  }
});
