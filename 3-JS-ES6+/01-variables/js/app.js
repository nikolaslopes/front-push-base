let link = document.createElement('a');
link.setAttribute('href', 'https://nikolas-lopes-curriculum.web.app/');
link.style.textDecoration = 'none';
link.style.color = '#633BBC';
link.style.fontSize = '32px';
link.style.fontWeight = 'bold';

let content = document.createTextNode('Meu Website');
link.appendChild(content);

let container = document.querySelector("#app");
container.appendChild(link);

let box = document.querySelector(".box");
box.appendChild(link);
box.style.width = '460px';
box.style.height = '30%';
box.style.border = '2px solid white';
box.style.borderRadius = '10px';
box.style.padding = '42px';
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';

const media = window.matchMedia('(max-width: 540px)');
if(media.matches) {
  box.style.borderColor = '#99C2FD';
  link.style.fontSize = '26px';
} else {
  box.style.borderColor = '#633BBC';
  box.style.borderWidth = '3px';
}

let button = document.createElement('button');
button.style.width = '210px';
button.style.height = '56px';
button.style.fontSize = '22px';
button.style.fontWeight = 'bold';
button.style.backgroundColor = '#633BBC';
button.style.border = '2px solid aliceblue';
button.style.borderRadius = '10px';
button.style.color = '#fff';
button.style.cursor = 'pointer';

let buttonContent = document.createTextNode('Click me');
button.appendChild(buttonContent);

let buttonBox = document.querySelector('#button-box');
buttonBox.appendChild(button);
buttonBox.style.padding = '22px';


let input = document.querySelector('input');
input.style.width = '100%';
input.style.height = '56px'
input.style.outline = 'none';
input.style.fontSize = '16px';
input.style.padding = '16px';
input.style.fontWeight = '700';

input.setAttribute('placeholder', 'Type Something')

function callback(event) {
  let currentKey = event.key;
  alert(`A tecla ${currentKey} foi pressionada`);
}

input.addEventListener('keydown', callback);
