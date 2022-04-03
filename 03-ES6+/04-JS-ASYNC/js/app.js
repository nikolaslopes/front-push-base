// var myPromise = function () {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     // instanciando uma classe em uma variável que herda os métodos, e propriedades da classe

//     xhr.open("GET", "https://api.github.com/users/nikolaslopes");
//     xhr.send(null);

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//           console.log(`The request code is ${xhr.status}`);
//         } else {
//           reject(`The request failed`);
//         }
//       }
//     };
//   });
// };

import { stringFunctions } from "../functions/string.js";
import { mathOperations } from "../functions/math.js";

const upperName = stringFunctions.upperCase("nikolas");
const lowerName = stringFunctions.lowerCase("SALOKIN");

const sum = mathOperations.sumOperation(2, 2);
const exponent = mathOperations.exponentOperation(2, 3);

console.log(upperName);
console.log(lowerName);

console.log(sum);
console.log(exponent);

axios
  .get("https://api.github.com/users/nikolaslopes")
  .then(function (response) {
    console.log(`\n\nHTTP Status: ${response.status}`);
  })
  .catch(function (error) {
    console.log(error);
  });
