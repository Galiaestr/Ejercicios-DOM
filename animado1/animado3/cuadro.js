const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 297;
let y = 198;
let width = 6;
let height = 4;
let crece = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = `hsql(${x},50%,50%)`;
    ctx.fillRect(x, y, width, height);
    if(crece){
        x -= 3;
        width += 6;
        y -= 2;
        height += 4;
    } else {
        x += 3;
        width -= 6;
        y += 2;
        height -= 4;
    }
    crece = width > 600? !crece: crece;
    crece = width < 6? !crece: crece;
}, 50);