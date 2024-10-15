const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const radioInput = document.getElementById('radio');
const shadowInput = document.getElementById('shadow');
const btnChange = document.getElementById('btnChange');

btnChange.addEventListener('click', () => {
  const width = widthInput.value;
  const height = heightInput.value;
  const radio = radioInput.value;
  const shadow = shadowInput.value;

  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  container.style.borderRadius = `${radio}px`;
  container.style.boxShadow = `0 0 10px ${shadow}`;
});