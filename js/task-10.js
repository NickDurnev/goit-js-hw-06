const createBtn = document.querySelector('button[data-create]');
const deleteBtn = document.querySelector('button[data-destroy]')
const divList = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', boxesNumber);
deleteBtn.addEventListener('click', destroyBoxes);

function boxesNumber(e) {
  let divNumber = e.currentTarget.value;
  createBtn.addEventListener('click', () => {
    createBoxes(divNumber);
    divNumber = 0;
  });
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let divSize = 20;
  const divMarkUp = [];
  for (let i = 1; i <= amount; i += 1) {
    const divBox = document.createElement('div');
    const divColor = getRandomHexColor();
    divSize += 10;
    divBox.style.width = `${divSize}px`;
    divBox.style.height = `${divSize}px`;
    divBox.style.backgroundColor = `${divColor}`;
    divMarkUp.push(divBox);
  }
  divList.append(...divMarkUp);
}

function destroyBoxes() {
  while (divList.firstChild) {
    divList.removeChild(divList.firstChild);
  }
  inputEl.value = 0;
}
