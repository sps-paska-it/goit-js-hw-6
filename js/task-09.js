const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

const changeColor = () => {
  body.style.background = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
}
btn.addEventListener('click', changeColor);