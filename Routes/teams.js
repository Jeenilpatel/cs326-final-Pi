const pokedex = document.getElementById('pokedex');
const cachedPokemon = {};

//Fetchets the Pokemon form the API the first 151 Pokemon

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}));

    ShowPokemon(pokemon);
};



//Displays the Pokemon in a card format and creates a car for the firs 151 Pokemon
const ShowPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map( 
        (pokeman) =>
    `
        <li class="card" onclick="SelectedPokemon(${pokeman.id})">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            </a>
         </li>
    `
        ).join('');
    pokedex.innerHTML = pokemonHTMLString;
};

//Wheneve  person select a pokmeon it check the users Cach and loads it from their, if not present it fectes it from the URL and saves it so it loads faster the next time

const SelectedPokemon = async (id) => {
    if (!cachedPokemon[id]) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
        cachedPokemon[id] = pokeman;
        Popup(pokeman);
    } else {
        Popup(cachedPokemon[id]);
    }
};

// Creats a Popup windowd with some infomration about the Pokemon selected.
const Popup = (pokeman) => {
    console.log(pokeman);
    const type = pokeman.types.map((type) => type.type.name)
    const baseName = pokeman.stats.map((stat) => stat.stat.name)
    const baseStats = pokeman.stats.map((stats) => stats.base_stat)
}


fetchPokemon();
