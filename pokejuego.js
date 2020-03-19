const API_URL = "https://pokeapi.co/api/v2/";
const ID_POKE = "pokemon/:id";

let extracPoke = document.getElementById("listPokemon");
let getPoke = id => {
  fetch(`${API_URL}${ID_POKE.replace(":id", id)}`)
    .then(resp => resp.json())
    .then(function(namePoke) {
      console.log(`este es el poke  ${namePoke.name}`);
      createPokemon(namePoke);
    })
    .catch(err => {
      console.log(`a ocurrido un erro en el ${id}`);
    });
};
let consulteGetPoke = () => {
  let onePoke = Math.floor(Math.random(1) * 200);
  let selectButtonPoke = document.getElementById("idButton");
  selectButtonPoke.addEventListener("click", () => {
    let selectPoke = document.getElementById("idPoke").value;
    console.log(selectPoke);
    getPoke(selectPoke);
  });
};

let createPokemon = namePoke => {
  let item = extracPoke.querySelector(`#pokemon-1`);
  let image = item.getElementsByTagName("img")[0];
  image.setAttribute("src", namePoke.sprites.front_default);
  let name = item.getElementsByTagName("p")[0];
  name.textContent = namePoke.name;
};

consulteGetPoke();
//cosulteGetPokeUser();
