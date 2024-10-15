const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


ctx.fillStyle = 'green';
ctx.roundRect(200, 100, 100, 150, 10);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.roundRect(200, 100, 100, 20, 10);
ctx.fill();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(230, 140, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(270, 140, 10, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(230, 140, 5, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(230, 140, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(260, 180);
ctx.lineTo(240, 180);
ctx.fill();

ctx.beginPath();
ctx.roundRect(220, 200, 60, 20, 10);
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(230, 200);
ctx.lineTo(250, 200);
ctx.lineTo(240, 210);
ctx.fill();

ctx.beginPath();
ctx.moveTo(255, 200);
ctx.lineTo(275, 200);
ctx.lineTo(265, 210);
ctx.fill();