let consoles = ['Playstation', 'XBOX', 'Switch', 'Xbox series'];

let games = ['The Last of Us', 'Hallo', 'Zelda', 'Infinite'];

const availableGames = consoles.map((item, index) => {
  return (`${index} ${item}: ${games[index]}`);
});

console.log("\n\n");

console.log(availableGames);

availableGames.forEach((item, index, array) => console.log(item));
