function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateBoxes = document.querySelector('[data-create]');
const btnDestroyBoxes = document.querySelector('[data-destroy]');
const mainDiv = document.querySelector('#boxes')
const inputAmount = document.querySelector('input');

// const amount = inputAmount.value; ---- xому так не працює????
// console.log(d);

// const createBoxes = () => { --- чому так не працює????
const createBoxes = (amount) => {
  amount = inputAmount.value;
  const divArr = [];
  let heightWidth = 30;
  for (let i = amount; i > 0; i = i - 1) {
    const div = document.createElement('div');
    div.style.width = `${heightWidth}px`;
    div.style.height = `${heightWidth}px`;
    div.style.background = getRandomHexColor();
    divArr.push(div);
    heightWidth += 10;
  }
  mainDiv.append(...divArr);
}

const destroyBoxes = () => {
  mainDiv.innerHTML = ''
}

// inputAmount.addEventListener('input', {});
btnCreateBoxes.addEventListener('click', createBoxes);
btnDestroyBoxes.addEventListener('click', destroyBoxes);