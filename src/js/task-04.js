let counterValue = 0;

const refs = {
    counter: document.querySelector("#value"),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]')
}



refs.decrement.addEventListener("click", () => {
    counterValue -= 1
   refs.counter.textContent = counterValue;
})

refs.increment.addEventListener("click", () => {
    counterValue += 1
    refs.counter.textContent = counterValue;
})


