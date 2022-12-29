const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (
    Number(input.getAttribute("data-length")) !==
    event.currentTarget.value.length
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
