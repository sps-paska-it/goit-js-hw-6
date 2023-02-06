const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const fontSizeChange = (e) => {
    const fontSize = e.currentTarget.value;
   return text.style.fontSize = `${fontSize}px`;
};
input.addEventListener('input', fontSizeChange);
