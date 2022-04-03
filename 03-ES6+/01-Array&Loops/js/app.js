let games = ["Tomb Raider", "God Of War", "The Last of Us"];

const gamesAvailable = games.map((item, index, array) => {
  return `\nGame ${index}: ${item}`;
});

console.log(`Available Games:${gamesAvailable}`);

console.log("\n\n\n");

let movies = ["Lord of The Rings", "The Batman", "Inception"];

movies.forEach((item, index, array) =>
  console.log(`Movie ${index}: ${movies[index]}`)
);

console.log("\n\n\n");

let fruits = ["Apple", "Banana", "Papaya"];

fruits.forEach((item, index, array) => console.log(array));
