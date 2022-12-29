const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfTitles = []

ingredients.forEach((element) => {
  const title = document.createElement("li");
  title.textContent = `${element}`;
  title.classList.add("item")
  arrayOfTitles.push(title)
});
const listRef = document.querySelector("#ingredients");
listRef.prepend(...arrayOfTitles);