document.documentElement.addEventListener("mousemove", onMouseMove);

function onMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

const games = ["Tomb Raider", "Sackboy", "GodOfWar"];

const [game1, game2, game3] = games;

console.log(game1);
