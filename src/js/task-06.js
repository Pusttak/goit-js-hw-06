const textInputRef = document.querySelector('#validation-input');

textInputRef.addEventListener('blur', onInputDefocus);

let oldClass = null;

function onInputDefocus(event) {
    const inputLength = event.currentTarget.value.length;
    let validator = null;

    if (inputLength !== 0) {
        validator = inputLength === Number(textInputRef.dataset.length) ? 'valid' : 'invalid';
    }

    setClassList(validator);
}

function setClassList(validator) {
    if (validator === oldClass) {
        return;
    }    
    if (oldClass === null) {
        textInputRef.classList.add(validator);
        textInputRef.classList.remove(oldClass);
    } else {
        textInputRef.classList.replace(oldClass, validator);
    }

    oldClass = validator;
}