const kotlinFeatures = {
  uppercase: {
    title: ".uppercase()",
    desc: "Zamienia wszystkie małe litery w danym ciągu znaków na <strong>WIELKIE LITERY</strong>. Oryginalna zmienna pozostaje bez zmian, funkcja zwraca nowy, zmodyfikowany tekst.",
    code: `val oryginal = "witaj w kotlinie"\nval wynik = oryginal.uppercase()\n// Wynik: "WITAJ W KOTLINIE"`
  },
  lowercase: {
    title: ".lowercase()",
    desc: "Działa odwrotnie do uppercase – przekształca wszystkie duże litery na <strong>małe litery</strong>. Idealne do sprawdzania poprawności wpisanych e-maili użytkowników.",
    code: `val email = "User@Domain.Com"\nval czystyEmail = email.lowercase()\n// Wynik: "user@domain.com"`
  },
  reversed: {
    title: ".reversed()",
    desc: "Odwraca kolejność wszystkich znaków w tekście. Przydatne do prostych algorytmów, np. sprawdzania czy wyraz jest palindromem (czyta się tak samo od tyłu).",
    code: `val slowo = "Kotlin"\nval od Tylu = slowo.reversed()\n// Wynik: "niltok"`
  },
  length: {
    title: ".length",
    desc: "To <strong>właściwość ciągu znaków</strong>, która zwraca liczbę określającą łączną długość tekstu (liczbę liter wraz ze spacjami i znakami specjalnymi). Pamiętaj: nie piszemy przy niej nawiasów ()!",
    code: `val haslo = "tajne123"\nval dlugosc = haslo.length\n// Wynik: 8`
  },
  isNullOrEmpty: {
    title: ".isNullOrEmpty()",
    desc: "Jedna z najważniejszych funkcji bezpieczeństwa w Kotlinie. Sprawdza, czy dana zmienna tekstowa ma wartość <code>null</code> lub jest całkowicie pusta (<code>\"\"</code>). Zwraca prawda (true) lub fałsz (false).",
    code: `val tekst: String? = ""\nval czyPusty = tekst.isNullOrEmpty()\n// Wynik: true`
  },
  contains: {
    title: ".contains()",
    desc: "Przeszukuje tekst w poszukiwaniu określonej frazy lub znaku. Jeśli szukany tekst znajduje się w środku, funkcja zwraca wartość true, w przeciwnym razie false.",
    code: `val opis = "Kurs programowania Android"\nval czyMaAndroid = opis.contains("Android")\n// Wynik: true`
  },
  replace: {
    title: ".replace()",
    desc: "Wyszukuje w tekście wskazane słowo lub znak i zamienia je automatycznie na nową, podaną przez Ciebie treść. Bardzo przydatne przy cenzurowaniu słów lub formatowaniu.",
    code: `val staryTekst = "Kocham Java"\nval nowyTekst = staryTekst.replace("Java", "Kotlin")\n// Wynik: "Kocham Kotlin"`
  },
  substring: {
    title: ".substring()",
    desc: "Służy do wycinania fragmentu tekstu. Jako argument podajesz tzw. indeksy (pozycję startową oraz końcową). Pamiętaj, że programy komputerowe liczą litery od cyfry 0!",
    code: `val imieNazwisko = "Jan Kowalski"\nval tylkoImie = imieNazwisko.substring(0, 3)\n// Wynik: "Jan"`
  },
  random: {
    title: ".random()",
    desc: "Zwraca całkowicie **losowy element**. Jeśli wywołasz to na tekście – wylosuje pojedynczą literę. Jeśli wywołasz na przedziale liczb (np. od 1 do 10) – zadziała jak cyfrowa kostka do gry.",
    code: `val kostka = (1..6).random()\n// Wynik: losowa liczba od 1 do 6\n\nval litera = "Kotlin".random()\n// Wynik: losowa litera np. 't'`
  },
  toIntOrNull: {
    title: ".toIntOrNull()",
    desc: "Bezpiecznie próbuje zamienić tekst na liczbę całkowitą. Jeśli użytkownik wpisze w formularzu tekst zamiast wieku (np. 'dwadzieścia'), program nie wyłączy się z błędem, tylko bezpiecznie zwróci wartość null.",
    code: `val tekstWiek = "25"\nval wiek = tekstWiek.toIntOrNull() // Wynik: 25\n\nval blednyTekst = "abc"\nval blad = blednyTekst.toIntOrNull() // Wynik: null`
  }
};

function showFeature(key) {
  // Ukryj komunikat startowy
  document.getElementById("default-message").style.display = "none";
  
  // Pokaż kontener z danymi
  const contentBox = document.getElementById("content-box");
  contentBox.style.display = "block";
  
  // Pobierz dane wybranej funkcji
  const feature = kotlinFeatures[key];
  
  // Wstrzykuj dane do elementów HTML
  document.getElementById("func-title").innerHTML = feature.title;
  document.getElementById("func-desc").innerHTML = feature.desc;
  document.getElementById("func-code").innerText = feature.code;
}
