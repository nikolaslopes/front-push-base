let link = document.createElement('a');

link.setAttribute('href', 'https://frontpush.com.br');

let content = document.createTextNode('Acessar o FrontPUSH');

link.appendChild(content);

let container = document.querySelector("#app");

container.appendChild(link);

link.style.textDecoration = 'none';
link.style.color = '#633BBC';
link.style.fontSize = '32px';
link.style.fontWeight = 'bold';

let box = document.querySelector(".box");

box.appendChild(link);

box.style.width = '100%';
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
} else {
  box.style.borderColor = '#633BBC';
  box.style.borderWidth = '3px';
}
