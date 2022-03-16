const button = document.querySelector('button');

const modal = document.getElementById('my-modal');

const buttonClose = document.querySelector('.close');

button.addEventListener('click', () => {
  modal.classList.add('modal-active');
})

buttonClose.addEventListener('click', () => {
  modal.classList.remove('modal-active');
})
