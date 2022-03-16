const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', inputSybmols);

function inputSybmols(e) {
    outputEl.textContent = 'Anonymous';
    if (e.currentTarget.value !== '') {
        outputEl.textContent = e.currentTarget.value;
    }
}