const slider = document.querySelector(".slider");
const row = document.querySelector(".row");

slider.onmousedown = function (event) {
  let shiftX = event.clientX - slider.getBoundingClientRect().left;
  let shiftY = slider.getBoundingClientRect().top;

  let range = row.getBoundingClientRect().width;
  let start = slider.getBoundingClientRect().left;
  let end = start + range;

  slider.style.position = "absolute";
  slider.style.zIndex = 1000;
  document.body.append(slider);

  function moveAt(clientX) {
    if (parseInt(clientX - shiftX) < start) {
      slider.style.left = start + "px";
    } else if (clientX - shiftX > end) {
      slider.style.left = end + "px";
    } else {
      slider.style.left = clientX - shiftX + "px";
      slider.style.top = shiftY + "px";
    }
  }

  moveAt(event.pageX, event.pageY);

  document.addEventListener("mousemove", onMouseMove);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    slider.onmouseup = null;
  };
};

slider.ondragstart = function () {
  return false;
};
