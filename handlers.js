import { isValidColor } from "./colors.js";

export function handleResult({ results }) {
  logWord(results);
  const words = results[results.length - 1][0].transcript;
  let color = words.toLowerCase();
  color = color.replace(/\s/g, "");
  if (!isValidColor(color)) return;
  let spanEl = document.querySelector(`.${color}`);
  spanEl.classList.add("got");
  document.body.style.backgroundColor = color;
}
