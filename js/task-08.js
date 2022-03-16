const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', checkFormInputs);
function checkFormInputs(e) {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === "" ||
    password.value === "") {
    return alert('Заполните все поля')
    }
    const inputsValues = {
        email: `${email.value}`,
        password: `${password.value}`,
    }
    console.log(inputsValues);
    e.currentTarget.reset()
}

