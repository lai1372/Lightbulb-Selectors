// Write your code here
const light1 = document.querySelector("#lightbulb1");
const light2 = document.querySelector("#lightbulb2");
const light3 = document.querySelector("#lightbulb3");

const subtitle = document.querySelector(".subtitle");

let count = 0;

function onClick(event) {
  count++;
  if (count === 1) {
    subtitle.innerHTML = `<h3 class="subtitle">You've clicked the lights ${count} time</h3>`;
  } else {
    subtitle.innerHTML = `<h3 class="subtitle">You've clicked the lights ${count} times</h3>`;
  }
  let myBulb = document.getElementById(event.target.id);
  myBulb.classList.toggle("itemlightbulb");
  myBulb.classList.toggle("active");
}

light1.addEventListener("click", onClick);
light2.addEventListener("click", onClick);
light3.addEventListener("click", onClick);
