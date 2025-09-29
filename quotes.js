document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    { text: "Today is your opportunity to build the tomorrow you want.", author: "Ken Poirot", bg: "images/forest.jpg" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", bg: "images/car.jpg" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", bg: "images/dreamer.jpg" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan", bg: "images/sea.jpg" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain", bg: "images/mountains.jpg" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown", bg: "images/clouds.jpg" }
  ];

  const tints = [
    "rgba(255, 200, 200, 0.1)",
    "rgba(200, 255, 200, 0.1)",
    "rgba(200, 200, 255, 0.1)",
    "rgba(255, 255, 200, 0.1)",
    "rgba(255, 200, 255, 0.1)",
    "rgba(200, 255, 255, 0.1)"
  ];

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const overlay1 = document.getElementById("overlay1");
  const overlay2 = document.getElementById("overlay2");

  let topOverlay = overlay1;
  let lastIndex = -1;

  function showQuote(index) {
    const q = quotes[index];

    // remove previous animation classes
    quoteEl.classList.remove("animate-text");
    authorEl.classList.remove("animate-text");

    // switch overlays for crossfade
    const nextOverlay = topOverlay === overlay1 ? overlay2 : overlay1;
    nextOverlay.style.backgroundImage = `url('${q.bg}')`;
    nextOverlay.style.setProperty("--tint-color", tints[index]);
    nextOverlay.style.opacity = 1;
    topOverlay.style.opacity = 0;
    topOverlay = nextOverlay;

    // update text
    quoteEl.textContent = q.text;
    authorEl.textContent = "— " + q.author;

    // trigger fade-up animation
    void quoteEl.offsetWidth; // force reflow
    quoteEl.classList.add("animate-text");
    authorEl.classList.add("animate-text");

    lastIndex = index;
  }

  function nextQuote() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * quotes.length);
    } while (nextIndex === lastIndex); // avoid immediate repeat

    showQuote(nextIndex);
  }

  // auto-change every 7 seconds
  setInterval(nextQuote, 7000);

  // initial load
  nextQuote();
});
