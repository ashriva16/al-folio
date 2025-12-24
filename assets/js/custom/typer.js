document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("fade-text");
  const text = textEl.textContent;
  textEl.textContent = ""; // clear original
  textEl.style.visibility = "hidden"; // hide until built

  const letterDelay = 50; // ms between letters
  let offset = 0; // cumulative delay

  // Split into words and spaces, keeping spaces as separate tokens
  const tokens = text.split(/(\s+)/);

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      // Real spaces -> allow natural wrapping at spaces
      textEl.appendChild(document.createTextNode(" "));
      offset += letterDelay; // optional tiny gap for rhythm
      return;
    }

    // Build a word container so the whole word stays intact
    const wordSpan = document.createElement("span");
    wordSpan.className = "word"; // CSS ensures no mid-word breaks
    for (let i = 0; i < token.length; i++) {
      const ch = token[i];
      const s = document.createElement("span");
      s.className = "letter";
      s.textContent = ch;
      s.style.animationDelay = `${offset + i * letterDelay}ms`;
      wordSpan.appendChild(s);
    }
    textEl.appendChild(wordSpan);
    offset += token.length * letterDelay;
  });

  textEl.style.visibility = "visible";
});
