const card = document.querySelector(".card");
const droppables = document.querySelectorAll(".droppable");

const onDragStart = (event) => {
  event.dataTransfer.setData("text", event.target.id);
  setTimeout(() => {
    event.target.style.display = "none";
  }, 0);
};
const allowDrop = (event) => {
  event.preventDefault();
};
const handleDrop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const element = document.querySelector(`#${data}`);
  element.style.display = "";
  event.target.append(element);
};

card.addEventListener("dragstart", onDragStart);
droppables.forEach((item) => {
  item.addEventListener("dragover", allowDrop);
  item.addEventListener("drop", handleDrop);
});
