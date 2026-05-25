// ==========================================
// PROSTE ZADANIA DLA POCZĄTKUJĄCYCH
// ==========================================
const exercisesData = [
    {
        topic: "Podstawy: Zmienne",
        instruction: "Zadeklaruj zmienną o nazwie 'wiek' typu Int i przypisz jej wartość 25:",
        lines: [
            `<span class="code-keyword">val</span> wiek: <span class="code-type">Int</span> <span class="code-keyword">=</span> <input type="text" class="code-input" id="blank0">`
        ],
        answers: ["25"]
    },
    {
        topic: "Podstawy: Funkcje",
        instruction: "Użyj słowa kluczowego do zdefiniowania prostej funkcji:",
        lines: [
            `<input type="text" class="code-input" id="blank0" <span class="code-keyword"></span> przywitanie() {`,
            `    println("Cześć!")`,
            `}`
        ],
        answers: ["fun"]
    },
    {
        topic: "Podstawy: Warunki",
        instruction: "Wpisz brakujące słowo, aby sprawdzić czy liczba jest większa od zera:",
        lines: [
            `<span class="code-keyword">if</span> (liczba <input type="text" class="code-input" id="blank0"> 0) {`,
            `    println("Dodatnia")`,
            `}`
        ],
        answers: [">"]
    }
];

// Zmienne stanu
let currentExerciseIndex = 0;

// Pobieranie elementów DOM
const exerciseTitle = document.getElementById("exercise-title");
const exerciseTopic = document.getElementById("exercise-topic");
const exerciseInstructions = document.getElementById("exercise-instructions");
const codeLinesContainer = document.getElementById("code-lines-container");
const exerciseFeedback = document.getElementById("exercise-feedback");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");

// ==========================================
// LOGIKA APLIKACJI
// ==========================================

function loadExercise() {
    exerciseFeedback.innerText = "";
    checkBtn.disabled = false;
    const ex = exercisesData[currentExerciseIndex];
    
    exerciseTitle.innerText = `Zadanie ${currentExerciseIndex + 1} / ${exercisesData.length}`;
    exerciseTopic.innerText = ex.topic;
    exerciseInstructions.innerText = ex.instruction;
    
    codeLinesContainer.innerHTML = ex.lines
        .map((line, idx) => `<div><span style="color:#57606f; margin-right: 15px;">${idx + 1}</span> ${line}</div>`)
        .join("");
}

function checkExercise() {
    const ex = exercisesData[currentExerciseIndex];
    let isCorrect = true;
    
    ex.answers.forEach((correctAnswer, idx) => {
        const inputElement = document.getElementById(`blank${idx}`);
        const userInput = inputElement.value.trim(); 
        
        if (userInput !== correctAnswer) {
            isCorrect = false;
            inputElement.style.borderColor = "#e74c3c";
        } else {
            inputElement.style.borderColor = "#2ecc71";
            inputElement.disabled = true;
        }
    });
    
    if (isCorrect) {
        exerciseFeedback.innerText = "✓ Super! Idzie Ci świetnie.";
        exerciseFeedback.style.color = "#2ecc71";
        checkBtn.disabled = true;
    } else {
        exerciseFeedback.innerText = "❌ Spróbuj jeszcze raz!";
        exerciseFeedback.style.color = "#e74c3c";
    }
}

function nextExercise() {
    if (currentExerciseIndex < exercisesData.length - 1) {
        currentExerciseIndex++;
        loadExercise();
    } else {
        exerciseFeedback.innerText = "🎉 Brawo! Opanowałeś te podstawy.";
        exerciseFeedback.style.color = "#6c5ce7";
        checkBtn.disabled = true;
        nextBtn.disabled = true;
    }
}

loadExercise();