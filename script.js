
const questions = [
  {
    q: "Co oznacza 'fun' w Kotlinie?",
    a: ["klasa", "funkcja", "zmienna", "obiekt"],
    correct: 1
  },
  {
    q: "Które słowo tworzy funkcję?",
    a: ["fun", "def", "function", "method"],
    correct: 0
  },
  {
    q: "Kotlin działa na:",
    a: ["JVM", "BIOS", "GPU", "RAM"],
    correct: 0
  }
];

let current = 0;
let score = 0;

function show() {
  document.getElementById("question").innerText = questions[current].q;

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.innerText = questions[current].a[i];
  });
}

function answer(i) {
  if (i === questions[current].correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    show();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").innerText =
      `Wynik: ${score}/${questions.length}`;
  }
}

show();