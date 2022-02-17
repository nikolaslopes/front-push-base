let link = document.createElement('a');

link.setAttribute('href', 'https://frontpush.com.br');

let content = document.createTextNode('Acessar o FrontPUSH');

link.appendChild(content);

let container = document.querySelector("#app");

container.appendChild(link);
