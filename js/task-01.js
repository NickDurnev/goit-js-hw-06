const listEl = document.querySelectorAll('.item');
const listTitleEl = document.querySelectorAll('h2');
const firstAddList = listEl[0].querySelectorAll('.item li');
const secondAddList = listEl[1].querySelectorAll('.item li');
const thirdAddList = listEl[2].querySelectorAll('.item li');
console.log(`Number of categories: ${listEl.length}

Category: ${listTitleEl[0].textContent}
Elements: ${firstAddList.length}

Category: ${listTitleEl[1].textContent}
Elements: ${secondAddList.length}

Category: ${listTitleEl[2].textContent}
Elements: ${thirdAddList.length}`);
