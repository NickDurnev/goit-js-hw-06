const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', changeTextElFontSize)

function changeTextElFontSize(e) {
    const inputValue = e.currentTarget.value;
    textEl.style.fontSize = `${inputValue}px`;
}
