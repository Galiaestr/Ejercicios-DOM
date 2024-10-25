const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let radio = 1;
let sentido = true;
let color = 'black';


setInterval(() => {
    ctx.clearRect(0, 0, 800, 600);
    ctx.beginPath()
    ctx.fillStyle = color;
    ctx.arc(300, 200, radio, 0, Math.PI * 2 );
    ctx.fill();
    radio = sentido? radio + 1: radio - 1;
    sentido = radio > 200? !sentido: sentido;
    sentido = radio < 1? !sentido: sentido;
    color = `hsl(${radio + 150},90%,70%)`;   

}, 100);