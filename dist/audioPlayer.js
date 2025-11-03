// ========== audioPlayer.js ==========
// Game Audio Player v1.3
// Features: Marker, Single-Playback, Progress Save, Title, Credit-Link

const AudioPlayer = (() => {
  const STORAGE_KEY_PREFIX = "audioPlayer_progress_";
  const players = [];

  function init() {
    const elements = document.querySelectorAll(".game-audio");
    elements.forEach((el) => createPlayer(el));
  }

  function createPlayer(el) {
    const src = el.dataset.src;
    if (!src) return console.warn("AudioPlayer: kein data-src gefunden", el);

    const title = el.dataset.title || "";
    const credit = el.dataset.credit || "";
    const creditUrl = el.dataset.creditUrl || "";

    // Marker einlesen
    let markers = [];
    try {
      markers = JSON.parse(el.dataset.markers || "[]");
    } catch (err) {
      console.error("AudioPlayer: Marker-JSON ungültig", err);
    }

    // Player-Container
    const container = document.createElement("div");
    container.classList.add("audio-player");

    // Titel (optional)
    if (title) {
      const titleEl = document.createElement("div");
      titleEl.classList.add("audio-title");
      titleEl.textContent = title;
      container.appendChild(titleEl);
    }

    // Audioelement
    const audio = document.createElement("audio");
    audio.src = src;
    audio.controls = true;
    container.appendChild(audio);

    // Fortschritt wiederherstellen
    const savedTime = localStorage.getItem(STORAGE_KEY_PREFIX + src);
    if (savedTime) audio.currentTime = parseFloat(savedTime);

    // Fortschritt speichern
    audio.addEventListener("timeupdate", () => {
      localStorage.setItem(STORAGE_KEY_PREFIX + src, audio.currentTime);
    });

    // Nur ein Audio gleichzeitig
    audio.addEventListener("play", () => {
      players.forEach((p) => {
        if (p !== audio) p.pause();
      });
    });

    // Marker-Bar hinzufügen
    if (markers.length > 0) {
      const markerBar = document.createElement("div");
      markerBar.classList.add("audio-markers");

      markers.forEach((m) => {
        const btn = document.createElement("button");
        btn.textContent = m.label || formatTime(m.time);
        btn.classList.add("audio-marker");
        btn.addEventListener("click", () => {
          audio.currentTime = m.time;
          audio.play();
        });
        markerBar.appendChild(btn);
      });

      container.appendChild(markerBar);
    }

    // Credit (optional, mit Link)
    if (credit) {
      const creditEl = document.createElement("div");
      creditEl.classList.add("audio-credit");

      if (creditUrl) {
        const link = document.createElement("a");
        link.href = creditUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = credit;
        creditEl.appendChild(link);
      } else {
        creditEl.textContent = credit;
      }

      container.appendChild(creditEl);
    }

    // Originalelement ersetzen
    el.replaceWith(container);

    // Player speichern (für globale Kontrolle)
    players.push(audio);
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", AudioPlayer.init);