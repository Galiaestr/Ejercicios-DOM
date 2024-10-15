const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const imgComputer = document.querySelector('#choicecompu');
const resultText = document.querySelector('.result h1 span');

// Arreglo con las opciones posibles
const choices = ['rock', 'paper', 'scissors'];

// Arreglo con los posibles resultados (jugador gana, computadora gana, empate)
const results = ['Ganaste!', 'La computadora gano!', 'Empate'];

// Función para obtener una elección aleatoria de la computadora
const getComputerChoice = (userChoice) => {
    // Si el usuario elige tijeras, la computadora elige papel (puedes ajustar esta lógica según tus preferencias)
    if (userChoice === 'sissors') {
        return 'paper';
    } else {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
};

const getChoiceUser = (e) => {
    const userChoice = e.target.getAttribute('data-id');

    if (!choices.includes(userChoice)) return;

    imgUser.src = e.target.src;
    const computerChoice = getComputerChoice(userChoice);
    play(userChoice, computerChoice);
};

const play = (userChoice, computerChoice) => {
    // Determinar el ganador
    let resultIndex;
    if (userChoice === computerChoice) {
        resultIndex = 2; // Empate
    } else if (
        (userChoice === 'rock' && computerChoice === 'sissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'sissors' && computerChoice === 'paper')
    ) {
        resultIndex = 0; // Jugador gana
    } else {
        resultIndex = 1; // Computadora gana
    }

    resultText.textContent = results[resultIndex];

    // Actualizar la imagen de la computadora
    const computerImage = document.querySelector(`.images img[data-id="${computerChoice}"]`);
    if (computerImage) {
        imgComputer.src = computerImage.src;
    } else {
        console.error("No se encontró la imagen para la elección de la computadora:", computerChoice);
    }
};

images.forEach(image => image.addEventListener('click', getChoiceUser));