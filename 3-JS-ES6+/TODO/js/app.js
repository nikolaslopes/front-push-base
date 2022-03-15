let listElement = document.querySelector('.list');
let inputTextElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let arrayItems = [];

function renderTodo() {
  listElement.innerHTML = '';

  arrayItems.forEach((item, index, array) => {
    let listItemElement = document.createElement('li');
    let listItemText = document.createTextNode(item);

    let linkListElement = document.createElement('a');
    let linkListText = document.createTextNode('Excluir');

    listItemElement.appendChild(listItemText);
    listItemElement.classList.add('list-item');

    linkListElement.appendChild(linkListText);
    linkListElement.setAttribute('href', '#');
    linkListElement.setAttribute('onclick', `deleteItem(${index})`);

    listItemElement.appendChild(linkListElement);
    listElement.appendChild(listItemElement);
  });
}

renderTodo();

buttonElement.addEventListener('click', addItem);

function addItem() {
  let itemText = inputTextElement.value;
  arrayItems.push(itemText);

  inputTextElement.value = '';
  renderTodo();
}

function deleteItem(position) {
  arrayItems.splice(position, 1);
  renderTodo();
}
