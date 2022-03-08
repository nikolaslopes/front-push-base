var xhr = new XMLHttpRequest();
// instanciando uma classe em uma variável que herda os métodos, e propriedades da classe

xhr.open("GET", "https://api.github.com/users/nikolaslopes");
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
