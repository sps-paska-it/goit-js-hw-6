const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const arrItemIngradients = ingredients.reduce((arrItem, ingredient) => {
  const lastItem = document.createElement("li");
  lastItem.classList.add('item');
  lastItem.textContent = ingredient;
  arrItem.push(lastItem)
  return arrItem;
}, []);
listIngredients.append(...arrItemIngradients);
console.log(listIngredients);
