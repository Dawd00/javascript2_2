# Projekt Fetch API - Aplikacja demonstracyjna

## Przegląd
Ten projekt jest prostą aplikacją webową demonstrującą użycie Fetch API do komunikacji z JSONPlaceholder API. Aplikacja pozwala na pobieranie i wyświetlanie postów oraz tworzenie nowych postów.

## Stan aktualny
- ✅ Projekt zaimportowany do środowiska Replit
- ✅ Serwer HTTP działa na porcie 5000
- ✅ Dodano profesjonalne style CSS (Com2_2.1 - 28.10.2025)
- ✅ Dodano szczegółowe logowanie do konsoli (28.10.2025)

## Funkcjonalności
1. **Example** - Pobiera wszystkie posty i wyświetla jako JSON
2. **cw1** - Pobiera wszystkie posty i wyświetla jako sformatowaną listę HTML z efektem ładowania
3. **cw2** - Pobiera pojedynczy post (ID: 1) i wyświetla szczegóły
4. **cw3** - Tworzy nowy post metodą POST

## Ostatnie zmiany (28.10.2025)

### Style CSS
- Dodano link do `style.css` w pliku HTML
- Utworzono kompletny plik stylów z:
  - Gradientowym tłem (fioletowe odcienie)
  - Stylowanymi przyciskami z efektami hover
  - Ładnym kontenerem dla wyświetlanych danych
  - Animacjami i przejściami
  - Responsywnymi stylami dla list i divów
  - Niestandardowym paskiem przewijania

### Logowanie do konsoli
Dodano szczegółowe logowanie dla wszystkich funkcji:
- **Example**: Status odpowiedzi, liczba postów, wszystkie dane
- **CW1**: Status, liczba postów, wszystkie dane + pierwsze 3, komunikat sukcesu
- **CW2**: Status, szczegółowe dane pojedynczego postu (ID, tytuł, user ID, treść)
- **CW3**: Dane wysyłane, status odpowiedzi, dane utworzonego postu, komunikat sukcesu
- **Obsługa błędów**: console.error() dla wszystkich funkcji

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
