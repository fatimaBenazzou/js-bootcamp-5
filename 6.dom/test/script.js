let header = document.getElementById("header");

header.textContent = "This is the header modified";

const newElement = document.createElement("button");
newElement.textContent = "Click Me!";

const body = document.querySelector("body");
body.appendChild(newElement); //appends childNode as the last child of parentNode.

const newSpan = document.createElement("span");
newSpan.textContent = " Magic!";
header.appendChild(newSpan);

newSpan.addEventListener("mouseover", function () {
  newSpan.style.color = "red";
});
header.classList.remove("highlight");

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

newElement.addEventListener("click", () => {
  alert("Button clicked!");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "f") {
    console.log(`F was pressed !!!!!!!!!!!!!!!!!1`);
  }
  console.log(`Key pressed: ${event.key}`);
});
