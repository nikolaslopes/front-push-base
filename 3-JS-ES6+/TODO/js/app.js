let listElement = document.querySelector('.list');
let inputElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let array = ['Fazer um café', 'Ver aulas', 'Jogar'];

function renderTodo() {
  array.forEach((item, index, array) => {
    let listItemElement = document.createElement('li');
    let listItemText = document.createTextNode(item);

    let linkListElement = document.createElement('a');
    let linkListText = document.createTextNode('Excluir');

    listItemElement.appendChild(listItemText);
    listItemElement.classList.add('list-item');
    linkListElement.appendChild(linkListText);
    linkListElement.setAttribute('href', '#');

    listItemElement.appendChild(linkListElement);
    listElement.appendChild(listItemElement);
  });
}

renderTodo();
