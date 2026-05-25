// =========================
// DRAG & DROP LOGIC
// =========================

const items = document.querySelectorAll(".drag-item");
const dropZone = document.getElementById("dropZone");
const dragContainer = document.getElementById("dragContainer");

// Elementy do weryfikacji
const checkBtn = document.getElementById("checkDragBtn");
const feedback = document.getElementById("dragFeedback");

// 1. Zdarzenia dla przeciąganych elementów
items.forEach(item => {
  item.addEventListener("dragstart", (e) => {
    // Zamiast tekstu, przekazujemy ID elementu, aby go potem przenieść
    e.dataTransfer.setData("text/plain", e.target.id);
    // Używamy setTimeout dla efektu wizualnego (zniknięcie z oryginalnego miejsca podczas ciągnięcia)
    setTimeout(() => e.target.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

// 2. Funkcja pomocnicza pozwalająca na upuszczanie elementów
function handleDragOver(e) {
  e.preventDefault(); // To jest konieczne, aby przeglądarka pozwoliła na upuszczenie
}

function handleDrop(e, targetContainer) {
  e.preventDefault();
  // Pobieramy ID przeciąganego elementu
  const id = e.dataTransfer.getData("text/plain");
  const draggableElement = document.getElementById(id);
  
  // Przenosimy element fizycznie do nowego kontenera
  if (draggableElement) {
    targetContainer.appendChild(draggableElement);
  }
}

// 3. Pozwalamy na upuszczanie w dropZone (szare pole)
dropZone.addEventListener("dragover", handleDragOver);
dropZone.addEventListener("drop", (e) => handleDrop(e, dropZone));

// 4. Pozwalamy na odkładanie z powrotem do pojemnika pod spodem (w razie pomyłki)
dragContainer.addEventListener("dragover", handleDragOver);
dragContainer.addEventListener("drop", (e) => handleDrop(e, dragContainer));

// 5. Logika sprawdzania poprawności układanki
checkBtn.addEventListener("click", () => {
  // Zbieramy tekst z klocków znajdujących się w dropZone
  const droppedItems = Array.from(dropZone.children);
  const currentOrder = droppedItems.map(item => item.innerText).join(" ");
  
  // Prawidłowy ciąg znaków (oczekiwany wynik w Kotlinie)
  const correctOrder = "fun hello() { }";

  if (droppedItems.length < 4) {
    feedback.innerText = "Przeciągnij wszystkie 4 elementy!";
    feedback.style.color = "orange";
  } else if (currentOrder === correctOrder) {
    feedback.innerText = "Świetnie! Kolejność kodu Kotlin jest poprawna.";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Niestety, to nie jest poprawna kolejność. Spróbuj jeszcze raz!";
    feedback.style.color = "red";
  }
});