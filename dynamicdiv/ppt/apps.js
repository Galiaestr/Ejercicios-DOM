const images = document.querySelectorAll('.images img');
const imgUser = document.querySelectorAll

const getChoiceUser = (e) => {
    console.log(e.target);
    const getChoiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
    //pintar imagen de choices
    imgUser.src = imageUser;
    //llamar la funcion play
    Play(getChoiceUser)
}

const play = getChoiceUser => {

}
images.forEach(image => image.addEventListener('click', getChoiceUser));