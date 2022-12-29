const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
