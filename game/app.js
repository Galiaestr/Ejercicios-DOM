const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = "20px serif";

let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
highScore = parseInt(highScore);

const scoreElement = document.createElement('p');
scoreElement.textContent = `Puntuación: ${score}`;
document.body.appendChild(scoreElement);

const snake = [
    {
        x: 2,
        y: 1,
        show: function () {
            ctx.fillText('🍔', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function () {
            ctx.fillText('🍔', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function () {
            ctx.fillText('🍔', this.x * 20, this.y * 20);
        }
    },
];

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('👧', this.x * 20, this.y * 20);
    },
    aparece: function () {
        //generar valores this.x y this.y aleatorios
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 29) + 1;
    }
};

function updateHighScore(newScore) {
    let currentHighScore = parseInt(localStorage.getItem('highScore')) || 0;
    if (newScore > highScore) {
        localStorage.setItem('highScore', newScore);
        highScore = newScore;
        alert("¡Nuevo récord! Tu puntuación más alta es: " + newScore);
    }
}

function displayScore() {
    scoreElement.textContent = `Puntuación: ${score} | Récord: ${highScore}`;
}

function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        updateHighScore(score);
        displayScore();
        food.aparece();
        scoreElement.textContent = `Puntuación: ${score}`;
        snake.push({ ...snake[snake.length - 1] });
    }
}

function checkCollision() {
    for (let i = 2; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            // Colisión detectada
            alert("Perdiste, Volver a jugar?");
            location.reload();
            break;
        }
    }
}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    })
}

let direction = 1;
let x = 2;
let y = 1;


food.aparece();
setInterval(() => {

    checkCollision();
    updateHighScore();
    displayScore();
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat()
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    //validar limites
    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 1;
    else if (y < 1) x = 20;

}, 200);

document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') direction = 1;
        if (e.key === 'ArrowDown') direction = 2;
        if (e.key === 'ArrowLeft') direction = 3;
        if (e.key === 'ArrowUp') direction = 4;

    })