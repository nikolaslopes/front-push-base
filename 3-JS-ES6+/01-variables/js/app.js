
const p = document.querySelector('p');
p.classList.toggle('active');
p.classList.replace('active', 'ativado');

const img = document.querySelector('img');

const url = img.getAttribute('src');

console.log(`Url image: ${url}`)

console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'gato-arabe');

console.log(img.getAttribute('alt'));

img.removeAttribute('alt');
