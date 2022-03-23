const loginFormRef = document.querySelector('.login-form');
loginFormRef.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Oh no, no, no, fill in all the fields!');
    }

    const formData = {
        email: email.value,
        password: password.value,
    }

    console.log(formData);
    event.currentTarget.reset();
}
