// ==========================================
// BAZA DANYCH 10 FISZEK (Działy 4, 5, 6)
// ==========================================
const flashcardsData = [
    // --- 4. NULL SAFETY ---
    { 
        cat: "4. Null Safety", 
        q: "Znak zapytania (?) przy typie danych", 
        a: "Definiuje typ jako <strong>akceptujący wartość null</strong> (Nullable). Bez tego znaku przypisanie null spowoduje błąd kompilacji. (Przykład: <code>var imie: String?</code>)." 
    },
    { 
        cat: "4. Null Safety", 
        q: "Bezpieczne wywołanie (?.)", 
        a: "Wywołuje właściwość lub metodę <strong>wyłącznie wtedy, gdy obiekt nie jest nullem</strong>. Jeśli obiekt jest nullem – bezpiecznie zwraca wartość null." 
    },
    { 
        cat: "4. Null Safety", 
        q: "Operator Elvis (?:)", 
        a: "Pozwala zdefiniować <strong>domyślną wartość alternatywną</strong>. Jeśli wyrażenie po lewej stronie zwróci null, operator podstawi wartość po prawej stronie. (np. <code>imie ?: \"Gość\"</code>)." 
    },
    { 
        cat: "4. Null Safety", 
        q: "Asercja Not-Null (!!)", 
        a: "Wymusza traktowanie obiektu jako <strong>na pewno działającego (nie-null)</strong>. Jeżeli pod spodem znajdzie się jednak null, aplikacja wyrzuci błąd NullPointerException. Używaj ostrożnie!" 
    },
    { 
        cat: "4. Null Safety", 
        q: "Funkcja bezpieczna ?.let { }", 
        a: "Uruchamia blok kodu zawarty w klamrach <strong>wyłącznie wtedy, gdy obiekt nie jest nullem</strong>. Bieżący obiekt jest reprezentowany wewnątrz bloku jako zmienna 'it'." 
    },
    
    // --- 5. OBIEKTOWOŚĆ (OOP) ---
    { 
        cat: "5. Obiektowość (OOP)", 
        q: "Klasa danych (data class)", 
        a: "Klasa przeznaczona specjalnie do przechowywania struktur danych. Automatycznie generuje za kulisami metody <code>toString()</code>, <code>equals()</code>, <code>hashCode()</code> oraz <code>copy()</code>." 
    },
    { 
        cat: "5. Obiektowość (OOP)", 
        q: "Słowo kluczowe 'open'", 
        a: "Klasy i metody w Kotlinie są domyślnie zamknięte (final). Słowo kluczowe 'open' postawione przed klasą <strong>umożliwia innym klasom dziedziczenie po niej</strong>." 
    },
    { 
        cat: "5. Obiektowość (OOP)", 
        q: "Smart Cast (Sprytne rzutowanie)", 
        a: "Po sprawdzeniu typu obiektu instrukcją <code>is</code>, kompilator automatycznie rzutuje go na ten typ wewnątrz bloku kodu warunkowego (np. <code>if (x is String) { x.length }</code>)." 
    },
    
    // --- 6. KOLEKCJE & LAMBDY ---
    { 
        cat: "6. Kolekcje & Lambdy", 
        q: "Listy modyfikowalne (mutableListOf)", 
        a: "Tworzy elastyczną kolekcję (listę), do której można <strong>swobodnie dodawać, modyfikować lub usuwać elementy</strong> w czasie działania programu." 
    },
    { 
        cat: "6. Kolekcje & Lambdy", 
        q: "Metoda transformacji (.map)", 
        a: "Funkcja wyższego rzędu, która transformuje każdy element kolekcji zgodnie z instrukcją w lambdzie i zwraca <strong>nową, zmodyfikowaną listę o tej samej długości</strong>." 
    }
];

// ==========================================
// SILNIK INTERAKCJI FISZEK
// ==========================================
let currentCardIndex = 0;

// Pobranie elementów DOM
const flashcard = document.getElementById("flashcard");
const cardCategory = document.getElementById("card-category");
const cardTitle = document.getElementById("card-title");
const cardBackText = document.getElementById("card-back-text");
const cardCounter = document.getElementById("card-counter");

// Aktualizacja treści fiszki (Reset obrotu)
function updateFlashcard() {
    // Ukrywamy odwrócenie przy przejściu do innej karty
    flashcard.classList.remove("flipped");
    
    // Opóźnienie zmiany tekstu, aby nie działo się w trakcie obrotu
    setTimeout(() => {
        const data = flashcardsData[currentCardIndex];
        
        // Wstrzyknięcie danych teoretycznych
        cardCategory.innerText = data.cat;
        cardTitle.innerText = data.q;
        cardBackText.innerHTML = data.a; // Używamy innerHTML dla pogrubienia (data class)
        
        // Aktualizacja licznika 1 / 10
        cardCounter.innerText = `${currentCardIndex + 1} / ${flashcardsData.length}`;
    }, 150);
}

// Funkcja obracająca fiszkę po kliknięciu
function flipCard() {
    flashcard.classList.toggle("flipped");
}

// Nawigacja: Następna fiszka
function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

// Nawigacja: Poprzednia fiszka
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

// Pierwsze uruchomienie aplikacji (Inicjalizacja)
updateFlashcard();