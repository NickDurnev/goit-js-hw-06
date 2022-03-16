const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', inputLengthCheck);

function inputLengthCheck(e) {
    const inputLength = e.currentTarget.value.length;
    const inputMaxLength = inputEl.dataset.length;
    inputEl.classList.add('invalid')
    if (inputLength >= inputMaxLength) {
        inputEl.classList.replace('invalid','valid');
    }
    else {inputEl.classList.replace('valid','invalid')}
}

