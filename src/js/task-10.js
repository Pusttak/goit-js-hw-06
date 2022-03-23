function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector('#controls input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonReset: document.querySelector('[data-destroy]'),
  listBoxes: document.querySelector('#boxes'),
} 

refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonReset.addEventListener('click', destroyBoxes);

function createBoxes() {
  const allBoxes = [];
  for (let i = 0; i < refs.inputNumber.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = 30 + (i*10) + 'px';
    box.style.height = 30 + (i*10) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    allBoxes.push(box);
  }
  refs.listBoxes.append(...allBoxes);
}

// function createBoxes() {
//   const allBoxes = [];
//   for (let i = 0; i < refs.inputNumber.value; i += 1) {
//     const box = `<div style="width: ${30 + (i*10) + 'px'}; height: ${30 + (i*10) + 'px'}; background-color: ${getRandomHexColor()}"></div>`;
//     allBoxes.push(box);
//   }
//   refs.listBoxes.insertAdjacentHTML("beforeend", allBoxes.join(''))
// }

function destroyBoxes() {
  refs.listBoxes.innerHTML = '';
}
