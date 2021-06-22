"use strict";

let timeParameters = document.querySelectorAll(".time");
let inputs = document.querySelectorAll("input");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let colons = document.querySelectorAll(".colon");
let ringtone = document.querySelector(".my-audio");
let volume = document.querySelector(".volume");
let fullVolume = 0;
let inputValues = [];
let intervalId = 0;

document.body.addEventListener("click", function addInputValue(event) {
  inputs.forEach((input) => {
    if (event.target === input) {
      input.addEventListener("input", function getInput(event) {
        input.value = event.target.value;
        if (input.value > 99) {
          input.value = 99;
        } else if (isNaN(input.value)) {
          input.value = "00";
        }
      });
    }
  });
});


function interval() {
  if (
    hours.firstChild.value === "00" &&
    minutes.firstChild.value === "00" &&
    seconds.firstChild.value === "00"
  ) {
    return;
  }
  inputs.forEach((input) => {
    input.setAttribute("disabled", true);
    inputValues.push(input.value);
  });
  fullVolume = getDuration(inputs)
  clearInterval(intervalId);
  intervalId = setInterval(() => timer(seconds.firstChild), 1000);
}
function getDuration(inputs) {
    let duration = 0;
    let hours = 1;
    let minutes = 1;
    let seconds = 1;
    if (Number(inputs[0].value)) {
      hours = hours * Number(inputs[0].value) * 3600;
    } else {
      hours = 0;
    }
    if (Number(inputs[1].value)) {
      minutes = minutes * Number(inputs[1].value) * 60;
    } else {
      minutes = 0;
    }
    if (Number(inputs[2].value)) {
      seconds = seconds * Number(inputs[2].value);
    } else {
      seconds = 0;
    }
    duration = hours + minutes + seconds;
    return duration;
  }
  
  function getDynamicVolume(getDuration, inputs, volume) {
      let duration = getDuration(inputs);
      let volumePercent = (duration * 100) / fullVolume
      volume.style.width = volumePercent +'%'   
  }

function timer(target) {
  if (hours.firstChild.value !== "00" && minutes.firstChild.value === "00") {
    --hours.firstChild.value;
    if (hours.firstChild.value < 10) {
      let value = "0" + hours.firstChild.value;
      hours.firstChild.value = value;
    }
    minutes.firstChild.value = 60;
  }

  if (target.value === "00" && minutes.firstChild.value !== "00") {
    --minutes.firstChild.value;
    if (minutes.firstChild.value < 10) {
      let value = "0" + minutes.firstChild.value;
      minutes.firstChild.value = value;
    }
    target.value = 60;
  }

  --target.value;

  getDynamicVolume(getDuration, inputs, volume)

  colons.forEach((colon) => {
    colon.firstChild.classList.toggle("hidden");
  });
  if (target.value < 10) {
    let value = "0" + target.value;
    target.value = value;
  }
  target.textContent = target.value;

  if (
    target.value === "00" &&
    hours.firstChild.value === "00" &&
    minutes.firstChild.value === "00"
  ) {
    clearInterval(intervalId);
    ringtone.play();
    ringtone.loop = true;
    return;
  }
}

start.addEventListener("click", interval);
stop.addEventListener("click", () => {
  if (
    hours.firstChild.value === "00" &&
    minutes.firstChild.value === "00" &&
    seconds.firstChild.value === "00"
  ) {
    return;
  }
  clearInterval(intervalId);
  colons.forEach((colon) => {
    colon.firstChild.classList.remove("hidden");
  });
});

reset.addEventListener("click", () => {
  ringtone.loop = false;
  clearInterval(intervalId);
  for (let i = 0; i < inputs.length; ++i) {
    inputs[i].removeAttribute("disabled");
    inputs[i].value = inputValues[i];
  }
  inputValues.length = 0;
  colons.forEach((colon) => {
    colon.firstChild.classList.remove("hidden");
  });
});
