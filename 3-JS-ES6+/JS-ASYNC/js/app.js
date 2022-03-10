var myPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    // instanciando uma classe em uma variável que herda os métodos, e propriedades da classe

    xhr.open("GET", "https://api.gub.com/users/nikolaslopes");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          console.log(`The request code is ${xhr.status}`);
        } else {
          reject(`The request failed`);
        }
      }
    };
  });
};

myPromise()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
