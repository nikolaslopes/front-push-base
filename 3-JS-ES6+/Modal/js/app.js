const button = document.querySelector('button');

const modal = document.getElementById('my-modal');

const buttonClose = document.querySelector('span');

console.log(buttonClose)
button.addEventListener('click', () => {
  modal.classList.toggle('modal-active');
})

buttonClose.addEventListener('click', () => {
  modal.classList.toggle('modal-active');
})
