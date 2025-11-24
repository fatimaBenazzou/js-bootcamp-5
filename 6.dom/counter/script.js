const display = document.querySelector("#display");
const incBtn = document.querySelector("#increment");
const decBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  display.textContent = count;
});
decBtn.addEventListener("click", () => {
  count--;
  display.textContent = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});
