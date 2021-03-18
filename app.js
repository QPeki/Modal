const opens = document.getElementById('open');
const modalContainer = document.querySelector('.modal-container');
const closes = document.getElementById('close');
const closeX = document.getElementById('close-x');

opens.addEventListener('click', event => {
    event.stopPropagation();
    modalContainer.classList.add('show');
});

closeX.addEventListener('click', event => {
    modalContainer.classList.remove('show');
});

closes.addEventListener('click', event => {
    modalContainer.classList.remove('show');
});

window.onclick = () => {
    modalContainer.classList.remove('show');
}