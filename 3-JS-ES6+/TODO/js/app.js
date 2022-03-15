let listElement = document.querySelector('.list');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let array = ['Fazer um café', 'Ver aulas', 'Jogar'];

function renderTodo() {
  array.forEach((item, index, array) => {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(item);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  });
}

renderTodo();
