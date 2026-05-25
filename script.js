// Baza danych zawierająca dokładnie 10 pytań/zdań testowych
const questions = [
  { q: "Co oznacza 'fun' w Kotlinie?", a: ["Klasa", "Funkcja", "Zmienna", "Obiekt"], correct: 1 },
  { q: "Które słowo tworzy funkcję?", a: ["fun", "def", "function", "method"], correct: 0 },
  { q: "Kotlin działa głównie na maszynie:", a: ["JVM", "BIOS", "GPU", "RAM"], correct: 0 },
  { q: "Jak deklarujemy zmienną, której wartość można zmienić?", a: ["val", "const", "var", "let"], correct: 2 },
  { q: "Jak deklarujemy zmienną tylko do odczytu (stałą)?", a: ["var", "val", "static", "final"], correct: 1 },
  { q: "Który symbol oznacza bezpieczne wywołanie (Null Safety)?", a: ["!!", "?.", "?:", "&&"], correct: 1 },
  { q: "Jak połączyć dwa teksty (String Interpolation)?", a: ["$zmienna", "+zmienna", "#zmienna", "%zmienna"], correct: 0 },
  { q: "Który operator to operator 'Elvis'?", a: ["?.", "!!", "?:", "->"], correct: 2 },
  { q: "Czy na końcu linii w Kotlinie trzeba stawiać średnik (;)?", a: ["Tak", "Nie", "Tko w pętlach", "Tylko w klasach"], correct: 1 },
  { q: "Kto jest głównym twórcą języka Kotlin?", a: ["Google", "JetBrains", "Oracle", "Microsoft"], correct: 1 }
];

let current = 0;
let score = 0;

// Funkcja wyświetlająca bieżące pytanie
function show() {
  const currentQuestion = questions[current];
  
  // Aktualizacja paska postępu i tekstu pytania
  document.getElementById("progress").innerText = `Pytanie ${current + 1} z ${questions.length}`;
  document.getElementById("question").innerText = currentQuestion.q;

  const buttons = document.querySelectorAll(".answer-btn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");

  // Resetowanie widoku elementów sterujących
  feedback.innerText = "";
  nextBtn.style.display = "none";

  // Przywrócenie domyślnych stylów przycisków
  buttons.forEach((btn, i) => {
    btn.innerText = currentQuestion.a[i];
    btn.className = "answer-btn"; // czyści klasy .correct / .wrong
    btn.disabled = false;         // odblokowuje przyciski
  });
}

// Funkcja sprawdzająca wybraną odpowiedź
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[current];
  const buttons = document.querySelectorAll(".answer-btn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");

  // Zablokowanie wszystkich przycisków, aby gracz nie klikał wielokrotnie
  buttons.forEach(btn => btn.disabled = true);

  // Sprawdzenie poprawności i reakcja wizualna
  if (selectedIndex === currentQuestion.correct) {
    buttons[selectedIndex].classList.add("correct");
    feedback.innerText = "Doskonale! To poprawna odpowiedź.";
    feedback.style.color = "#2ecc71";
    score++;
  } else {
    buttons[selectedIndex].classList.add("wrong");
    // Pokazujemy też graczowi, która odpowiedź była tą właściwą
    buttons[currentQuestion.correct].classList.add("correct");
    feedback.innerText = "Niestety, błędna odpowiedź.";
    feedback.style.color = "#e74c3c";
  }

  // Pokazujemy przycisk przejścia dalej
  nextBtn.style.display = "block";
}

// Przejście do kolejnego pytania lub podsumowania
function nextQuestion() {
  current++;

  if (current < questions.length) {
    show();
  } else {
    // Ukrywamy boks quizu, pokazujemy kartę wyników
    document.getElementById("quiz-box").style.display = "none";
    
    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result-text");
    
    resultBox.style.display = "block";
    resultText.innerHTML = `Twój wynik to <strong>${score}</strong> na <strong>${questions.length}</strong> punktów.`;
  }
}

// Funkcja restartu quizu
function resetQuiz() {
  current = 0;
  score = 0;
  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  show();
}

// Pierwsze uruchomienie programu
show();