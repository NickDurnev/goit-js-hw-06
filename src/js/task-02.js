const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const listMarkUp = ingredients.map((ingridient) => {
  const divEl = document.createElement('li');
  divEl.textContent = ingridient;
  divEl.classList.add('item');
  return divEl;
});

listEl.append(...listMarkUp);

