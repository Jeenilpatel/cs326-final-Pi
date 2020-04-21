const url = "http://localhost:8080/counter"; // NOTE NEW URL

const pokedex = document.getElementById('pokedex');
const cachedPokemon = {};

//Fetches the first 151 Pokemon from the API

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

//Displays the Pokemon in a card format and creates a card for the first 151 Pokemon
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

//Whenever a person select a pokemon it check the users Cach and loads it from there, if not present it fetches it from the URL and saves it so it loads faster the next time

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

// Creates a Popup window with some information about the Pokemon selected.
const Popup = (pokeman) => {
    console.log(pokeman);
    const type = pokeman.types.map((type) => type.type.name)
    const baseName = pokeman.stats.map((stat) => stat.stat.name)
    const baseStats = pokeman.stats.map((stats) => stats.base_stat)

    const htmlString = `
        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Close</button>
            <div class="card">
                <img class="card-image" src="${
        pokeman.sprites['front_default']
        }"/>
                <h2 class="card-title">${pokeman.name}</h2>
                <p> Height:</small> ${pokeman.height} | Weight: ${pokeman.weight} </p>

                <p>
                <table align = "center">

                        <tr>
                            <th rowspan="2">Types</th>
                        </tr>
                    
                        <tr>
                            <td>${type[0].toUpperCase()}</td>
                            <td>${type[1].toUpperCase()}</td>
                        </tr>
                    </table>
                </p>

                <p>
                <table align = "center">
                        <tr>
                            <th>${baseName[0].toUpperCase()}</th>
                            <th>${baseName[1].toUpperCase()}</th>
                            <th>${baseName[2].toUpperCase()}</th>
                            <th>${baseName[3].toUpperCase()}</th>
                            <th>${baseName[4].toUpperCase()}</th>
                            <th>${baseName[5].toUpperCase()}</th>
                        </tr>
                        <tr>
                            <td>${baseStats[0]}</td>
                            <td>${baseStats[1]}</td>
                            <td>${baseStats[2]}</td>
                            <td>${baseStats[3]}</td>
                            <td>${baseStats[4]}</td>
                            <td>${baseStats[5]}</td>
                    </tr>
                    </table>
                </p>
                
            </div>
        </div>
    `;
    pokedex.innerHTML = htmlString + pokedex.innerHTML;
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchPokemon();