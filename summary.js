// summary.js
window.onload = function() {
    // 1. Pobranie wyników z poszczególnych modułów
    // Używamy parseInt, aby mieć pewność, że pracujemy na liczbach
    const quizS = parseInt(localStorage.getItem('quizScore')) || 0;
    const dragS = parseInt(localStorage.getItem('dragScore')) || 0;
    const kodS = parseInt(localStorage.getItem('kodScore')) || 0;

    // 2. Sumowanie punktów
    const total = quizS + dragS + kodS;
    const maxPoints = 30; // Zakładam, że łącznie do zdobycia jest 30 pkt
    const percentage = (total / maxPoints) * 100;

    // 3. Logika oceniania
    let grade = "2.0 (niedostateczny)";
    if (percentage >= 91) grade = "5.0 (bardzo dobry)";
    else if (percentage >= 81) grade = "4.5 (dobry plus)";
    else if (percentage >= 71) grade = "4.0 (dobry)";
    else if (percentage >= 61) grade = "3.5 (dostateczny plus)";
    else if (percentage >= 51) grade = "3.0 (dostateczny)";

    // 4. Wyświetlenie wyniku w Twoim elemencie <div id="wynik"></div>
    const displayElement = document.getElementById("wynik");
    if (displayElement) {
        displayElement.innerHTML = `
            <p>Wynik końcowy: <strong>${total}/${maxPoints}</strong></p>
            <p>Procent: ${percentage.toFixed(0)}%</p>
            <p>Ocena: <strong>${grade}</strong></p>
        `;
    }
};