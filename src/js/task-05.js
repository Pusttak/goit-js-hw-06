const inputNameRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputChange);

function onInputChange (event) {
    if (event.currentTarget.value === '') {
        return nameLabelRef.textContent = 'Anonymous';
    } 
    nameLabelRef.textContent = event.currentTarget.value;
    
};
