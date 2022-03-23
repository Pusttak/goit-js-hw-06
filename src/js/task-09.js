function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');

btnChangeColorRef.addEventListener('click', onClickBtnChange);

function onClickBtnChange(event) {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorRef.textContent = currentColor;
}