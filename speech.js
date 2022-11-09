import { handleResult } from "./handlers.js";
import { colorsByLength, isDark } from "./colors.js";

const colorsEl = document.querySelector(".colors");

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? "dark" : ""
        }" style="background:${color}">${color}</span>`
    )
    .join("");
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry, your browser doesn't support speech recognition");
    return;
  }
  console.log("starting...");

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.intermResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
