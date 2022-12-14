// require("dotenv").config();
let arrayOfPosts;
let backArray;

// const button = document.createElement('button');
// button.innerHTML = 'Start'
// document.body.append(button);

window.onload = function () {
  getPosts();
  background();
};

const getPosts = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/35/")
    .then((res) => res.json())
    .then((array) => {
      arrayOfPosts = array;
    });
};

const background = () => {
  fetch("https://pokeapi.co/api/v2/location/1/")
    .then((res) => res.json())
    .then((array) => (backArray = array));
  console.log(backArray);
};

const pokemon1 = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  console.log(arrayOfPosts);
  img.src =
    arrayOfPosts.sprites.versions["generation-iv"][
      "heartgold-soulsilver"
    ].back_shiny;
  div.append(img);
  document.body.append(div);
};

const pokemon2 = () => {
  arrayOfPosts.map(
    (sprite) =>
      sprite.sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_shiny
  );
};

const start = document.createElement("button");
start.innerHTML = "Start";
document.body.append(start);
start.addEventListener("click", pokemon1);
start.onclick = () => {
  const text = document.createTextNode(
    `Name: ${user.species.name}, HP: ${user.stats.base_stat}`
  );
};
