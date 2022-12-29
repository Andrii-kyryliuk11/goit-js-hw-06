function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", changeBackground);

function changeBackground(event) {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent;
}
