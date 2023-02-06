
const total = document.querySelector('#value');
let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const btnDecrement = () => {
    const decrementText = decrement.textContent.split('')
    counterValue -= decrementText[1];
    return total.textContent = counterValue;
};
const btnIncrement = () => {
    const incrementText = increment.textContent.split('')
    counterValue += Number(incrementText[1]);
    return total.textContent = counterValue;
};


decrement.addEventListener('click', btnDecrement);
increment.addEventListener('click', btnIncrement);
