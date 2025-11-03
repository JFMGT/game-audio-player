# 🎧 Game Audio Player

Ein leichtgewichtiges, einbettbares Tool zur Integration von **Audiofiles mit Sprungmarken** in Webseiten.  
Ideal für Brettspiele, Lerninhalte, Escape Rooms oder interaktive Erlebnisse.  
Einfach per `<div>` einfügen, Audio definieren, fertig.

---

## 🚀 Features

✅ Einbettbar auf jeder Webseite (kein Framework nötig)  
✅ Sprungmarken (Kapitel / Abschnitte) via `data-markers`  
✅ Nur ein Audio gleichzeitig (automatisches Pausieren anderer)  
✅ Fortschritts-Speicherung per `localStorage`  
✅ Optionaler Titel & Copyright-Link  
✅ Anpassbares Design über CSS-Variablen  
✅ Keine Abhängigkeiten, kein Build-Setup

---

## 📂 Projektstruktur

```
game-audio-player/
├─ dist/
│  ├─ audioPlayer.js          # Hauptskript (voll)
│  ├─ audioPlayer.min.js      # Minifizierte Version
│  ├─ audioPlayer.css         # Styling (voll)
│  ├─ audioPlayer.min.css     # Minifizierte Version
├─ demo/
│  └─ index.html              # Beispielseite mit mehreren Playern
├─ audio/
│  ├─ example.mp3             # Beispiel-Audiodatei (optional)
│  └─ README.txt              # Hinweis: eigene Dateien hier ablegen
├─ README.md
└─ LICENSE
```

> 🗂 **Hinweis:**  
> Lege deine eigenen Audiodateien im Ordner `/audio/` ab.  
> In der Einbindung gibst du den Pfad **relativ zur Seite** an, z. B.  
> `data-src="/audio/mein-file.mp3"`  
> Du kannst aber auch beliebige URLs (CDN, externe Pfade) verwenden.

---

## 🧩 Integration

### Variante 1: **Lokale Nutzung**

1. Lade das Projekt herunter (`Download ZIP` oder `git clone`)  
2. Lege deine Audiodateien in den Ordner `/audio/`  
3. Binde Skript & Styles in deine Seite ein:

```html
<link rel="stylesheet" href="dist/audioPlayer.css">
<script src="dist/audioPlayer.js"></script>
```

4. Füge deine Player-Definition ein:

```html
<div
  class="game-audio"
  data-src="/audio/level1.mp3"
  data-title="Level 1 – Nachtphase"
  data-credit="© 2025 BoardGameLabs"
  data-credit-url="https://boardgamelabs.com"
  data-markers='[
    {"time": 0, "label": "Intro"},
    {"time": 45, "label": "Phase 1"},
    {"time": 120, "label": "Finale"}
  ]'
></div>
```

Beim Laden der Seite wird automatisch der Player generiert.

---

## 🎨 Styling / Anpassung

Alle Farben, Schriftarten und Abstände sind über CSS-Variablen anpassbar:

```css
:root {
  --ap-bg: #f8f9fb;
  --ap-text: #222;
  --ap-muted: #666;
  --ap-accent: #ff6600;
  --ap-radius: 8px;
  --ap-font: "Manrope", sans-serif;
}
```

---

## 🧠 Erweiterte Optionen

| Attribut | Beschreibung | Beispiel |
|-----------|---------------|-----------|
| `data-title` | Zeigt Titel über dem Player | `"Level 1 – Nachtphase"` |
| `data-credit` | Zeigt Copyright unter dem Player | `"© 2025 BoardGameLabs"` |
| `data-credit-url` | Macht den Credit klickbar | `"https://boardgamelabs.com"` |
| `data-markers` | JSON-Array mit Zeitpunkten (in Sekunden) | `'[{"time":0,"label":"Intro"}]'` |

---

## 🧩 Beispielausgabe

![Beispiel-Player]

Eine Demo findest du unter https://rahmengeben.de/brettspiel-audio-player

---

## 💾 Fortschritts-Speicherung

- Jeder Player merkt sich automatisch, wo du aufgehört hast.  
- Gespeichert im Browser per `localStorage`, basierend auf der Audio-Datei (`data-src`).

---

## 🧱 Lizenz

MIT License © 2025 Jörg Füchtemeier | Rahmengeben.de
Frei zur Nutzung, Anpassung und Integration – kommerziell und privat.

---

## 🧭 Autor & Kontakt

👤 **Entwickler:** Jörg Füchtemeier
🌐 **Website:** https://rahmengeben.de
📧 **Kontakt:** hallo@rahmengeben.de  

Wenn du eine maßgeschneiderte Integration, ein individuelles Design oder Erweiterungen brauchst, melde dich gern!

---
