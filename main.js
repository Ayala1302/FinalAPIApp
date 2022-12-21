let pokemon1;
let backArray;
let pokemon2;

const list = document.querySelector('ul')

window.onload = function () {
  getPosts();
  getPosts2();
};

const getPosts = () => {
  const random = Math.floor(Math.random() * 100);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((res) => res.json())
    .then((array) => {
      pokemon1 = array;
    });
};

const getPosts2 = () => {
  const random2 = Math.floor(Math.random() * 100);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
    .then((res) => res.json())
    .then((array) => {
      pokemon2 = array;
    });
};


const poke = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("li");
  name.innerHTML = (`Name: ${pokemon1.species.name} <br> 
  HP: ${pokemon1.stats[0].base_stat} <br> 
  Attack: ${pokemon1.stats[1].base_stat} <br> 
  Defense: ${pokemon1.stats[2].base_stat}
    `);
  // name.appendChild(nameText);
  console.log(pokemon1);
  img.src =
    pokemon1.sprites.versions["generation-iv"][
      "heartgold-soulsilver"
    ].back_shiny;
  div.append(img);
  name.append(div);
  list.append(name);
};

const poke2 = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("li");
  name.innerHTML = (`Name: ${pokemon2.species.name} <br> 
  HP: ${pokemon2.stats[0].base_stat} <br> 
  Attack: ${pokemon2.stats[1].base_stat} <br> 
  Defense: ${pokemon2.stats[2].base_stat}
    `);
  // name.appendChild(nameText);
  console.log(pokemon2);
  img.src =
    pokemon2.sprites.versions["generation-iv"][
      "heartgold-soulsilver"
    ].back_shiny;
  div.append(img);
  div.id = "poke";
  name.append(div);
  list.append(name);
};

const begin = () => {
  const poke1Stats = pokemon1.stats[0].base_stat;
  const poke2Stats = pokemon2.stats[0].base_stat;
  if (poke1Stats > poke2Stats) {
    window.alert(`Pokemon: ${pokemon1.species.name} Won!`);
  } else if (poke2Stats > poke1Stats) {
    window.alert(`Pokemon: ${pokemon2.species.name} Won!`);
  } else if (poke1Stats === poke2Stats) {
    window.alert(`Both ${pokemon1.species.name} & ${pokemon2.species.name} fainted!`);
  }
};
