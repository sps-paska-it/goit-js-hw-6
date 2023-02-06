const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

// const totalCategories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${totalCategories.length}`);

// console.log(categories);
const categoriesfirstItem = categories.firstElementChild;
console.log(`Category: ${categoriesfirstItem.querySelector('h2').textContent}`);
console.log(`Elements: ${categoriesfirstItem.querySelector('ul').children.length}`);
console.log(`Category: ${categoriesfirstItem.nextElementSibling.querySelector('h2').textContent}`);
console.log(`Elements: ${categoriesfirstItem.nextElementSibling.querySelector('ul').children.length}`);
console.log(`Category: ${categories.lastElementChild.querySelector('h2').textContent}`);
console.log(`Elements: ${categories.lastElementChild.querySelector('ul').children.length}`);
// console.log(categoriesItem.length);

const listOfCategory = document.querySelector("#categories");
const listOfClassItem = listOfCategory.querySelectorAll(".item");
console.log(`Number of categories: ${listOfClassItem.length}`);

listOfClassItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});

const list = [...listOfClassItem].map((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});