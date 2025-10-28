# Projekt Fetch API - Aplikacja demonstracyjna

## Przegląd
Ten projekt jest prostą aplikacją webową demonstrującą użycie Fetch API do komunikacji z JSONPlaceholder API. Aplikacja pozwala na pobieranie i wyświetlanie postów oraz tworzenie nowych postów.

## Stan aktualny
- ✅ Projekt zaimportowany do środowiska Replit
- ✅ Serwer HTTP działa na porcie 5000
- ✅ Dodano profesjonalne style CSS (Com2_2.1 - 28.10.2025)
- ✅ Dodano zaawansowane logowanie w konsoli (Com2_2.2 - 28.10.2025)

## Funkcjonalności
1. **Example** - Pobiera wszystkie posty i wyświetla jako JSON
2. **cw1** - Pobiera wszystkie posty i wyświetla jako sformatowaną listę HTML z efektem ładowania
3. **cw2** - Pobiera pojedynczy post (ID: 1) i wyświetla szczegóły
4. **cw3** - Tworzy nowy post metodą POST

## Ostatnie zmiany (28.10.2025)

### Com2_2.1 - Style CSS
- Dodano link do `style.css` w pliku HTML
- Utworzono kompletny plik stylów z:
  - Gradientowym tłem (fioletowe odcienie)
  - Stylowanymi przyciskami z efektami hover
  - Ładnym kontenerem dla wyświetlanych danych
  - Animacjami i przejściami
  - Responsywnymi stylami dla list i divów
  - Niestandardowym paskiem przewijania

### Com2_2.2 - Logowanie w konsoli
- Dodano zaawansowane logowanie danych w konsoli przeglądarki:
  - **Example**: Grupowane logi z emoji, liczba postów, console.table
  - **CW1**: Tabela z wybranymi kolumnami, wyświetlanie pierwszych 5 postów
  - **CW2**: Szczegółowe informacje o pojedynczym poście
  - **CW3**: Logowanie danych przed i po utworzeniu postu
  - Użycie console.group() dla organizacji logów
  - Użycie console.table() dla tabelarycznego widoku
  - Kolorowe emoji dla łatwiejszej identyfikacji
  - Obsługa błędów z console.error()

## Architektura projektu
```
├── index.html       # Główna strona HTML z przyciskami
├── script.js        # Logika Fetch API i obsługa zdarzeń
├── style.css        # Style CSS dla całej aplikacji
└── replit.md        # Dokumentacja projektu
```

## Technologie
- HTML5
- CSS3 (z gradientami i animacjami)
- Vanilla JavaScript
- Fetch API
- JSONPlaceholder API (testowe dane)

## Serwer
- Typ: Python HTTP Server
- Port: 5000
- Komenda: `python3 -m http.server 5000`
