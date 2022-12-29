const refs = {
  categoryList: document.querySelector("#categories"),
};

const countOfElements = refs.categoryList.children;

const arrayOfElements = [...countOfElements];
function numberOfCategories() {
  console.log(`Number of categories: ${arrayOfElements.length}`);
}

function perseSubCategory() {
  const a = arrayOfElements.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("ul > li").length}`);
  });
}

numberOfCategories();
perseSubCategory();
