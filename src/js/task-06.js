const textInputRef = document.querySelector('#validation-input');
const validInputClass = 'valid';
const invalidInputClass = 'invalid'

textInputRef.addEventListener('blur', onInputDefocus);

function onInputDefocus(event) {
    const inputValidator = event.currentTarget.value.length !== 0
    ? event.currentTarget.value.length === Number(textInputRef.dataset.length)
        ? validInputClass
        : invalidInputClass
    : null;

    setClassList(inputValidator);

}

function setClassList(newClass) {
    const oldClass = textInputRef.classList.contains(validInputClass)
        ? validInputClass
        : textInputRef.classList.contains(invalidInputClass)
            ? invalidInputClass
        : null;

    if (oldClass !== newClass) {
        if (oldClass === null) {
        textInputRef.classList.add(newClass);
    } else if (newClass !== null) {
        textInputRef.classList.replace(oldClass, newClass);
    } else if (newClass === null){
        textInputRef.classList.remove(oldClass);
    }
    }
}
