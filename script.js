// =========================
// DRAG & DROP LOGIC
// =========================

const items = document.querySelectorAll(".drag-item");
const dropZone = document.getElementById("dropZone");

items.forEach(item => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.innerText);
    e.target.classList.add("dragging");
  });

  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const text = e.dataTransfer.getData("text");

  const newItem = document.createElement("div");
  newItem.classList.add("drag-item");
  newItem.innerText = text;

  dropZone.appendChild(newItem);
});