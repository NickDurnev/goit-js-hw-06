const changeColorBtnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
changeColorBtnEl.addEventListener('click', randomBodyColor);

function randomBodyColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${randomColor}`;
  colorTextEl.textContent = `${randomColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}