const images = document.querySelectorAll('.images img');

const getChoiceUser = (e) => {
    console.log(e.target);
    const getChoiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
}

images.forEach(image => image.addEventListener('click', getChoiceUser));