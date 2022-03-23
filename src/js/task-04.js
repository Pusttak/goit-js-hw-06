const decrementButtonRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('#counter button[data-action="increment"]');
const countValueRef = document.querySelector('#value');

decrementButtonRef.addEventListener('click', onDecrementBtnClick);
incrementButtonRef.addEventListener('click', onIncrementBtnClick);

let counterValue = 0;

function onIncrementBtnClick() {
    countValueRef.textContent = counterValue += 1;
};

function onDecrementBtnClick() {
    countValueRef.textContent = counterValue -= 1;
};



