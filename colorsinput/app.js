const inputRed = document.querySelector('#red');
const inputBlue = document.querySelector('#blue');
const inputGreen = document.querySelector('#green');
const body = document.querySelector('body');

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

inputRed.addEventListener('change', (e) => {
    redColor = e.target.value;
    body.style.backgroundColor = generateColor();
});

inputBlue.addEventListener('change', (e) => {
    blueColor = e.target.value;
    body.style.backgroundColor = generateColor();
});

inputGreen.addEventListener('change', (e) => {
    greenColor = e.target.value;
    body.style.backgroundColor = generateColor();
});