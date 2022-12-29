function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  container: document.querySelector("#boxes"),
};
const arr = [];

refs.create.addEventListener("click", createBoxes);

function createBoxes() {
  const inputValue = Number(refs.input.value);
  arr.length = inputValue;

  for (let i = 0; i < arr.length; i++) {
    const arrayOfElements = [];
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${width}px`;

    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrayOfElements.push(div);
    refs.container.append(...arrayOfElements);
  }
}

refs.destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.container.innerHTML = "";
}
