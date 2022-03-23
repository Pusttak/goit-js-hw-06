const sizeControlRef = document.querySelector('#font-size-control');
const dinamicSizeTextRef = document.querySelector('#text');

sizeControlRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    dinamicSizeTextRef.style.fontSize = event.currentTarget.value + 'px';
    
}