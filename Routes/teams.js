const pokedex = document.getElementById('pokedex');
const url = "http://localhost:8080/teams"; // NOTE NEW URL

function fetchPokemon(PokeID, pokemon_Num, pokemon_Name) {

    const promises = [];
    
        const url = `https://pokeapi.co/api/v2/pokemon/${document.getElementById(PokeID).value}`;

        promises.push(fetch(url).then((res) => res.json() ) );

        Promise.all(promises).then( (results) => {
                    const pokemon = results.map((result) => (
                        {
                            name: result.name,
                            image: result.sprites['front_default'],
                            type: result.types.map( (type) => type.type.name).join(', '),
                            id: result.id
                        }
                    )
                );
                const nameCapitalized = pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1)
                document.getElementById(pokemon_Name).innerHTML = nameCapitalized;
                document.getElementById(pokemon_Num).src = pokemon[0].image;
        }
    );
};

function team_Update(){
    fetchPokemon('PokeID1', 'pokemon1', 'pokemon1_Name');
    fetchPokemon('PokeID2', 'pokemon2', 'pokemon2_Name');
    fetchPokemon('PokeID3', 'pokemon3', 'pokemon3_Name');
    fetchPokemon('PokeID4', 'pokemon4', 'pokemon4_Name');
    fetchPokemon('PokeID5', 'pokemon5', 'pokemon5_Name');
    fetchPokemon('PokeID6', 'pokemon6', 'pokemon6_Name');
    teamCreate();
}

function teamCreate() {
    (async () => {
	let teamName = document.getElementById("Team-Name").value;
	// let userName = document.getElementById("username").value;
	const newURL = url + "/create?name=" + teamName;
	console.log("counterCreate: fetching " + newURL);
	const resp = await fetch(newURL);
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "101: <b>" + teamName + " created.</b>";
	} else {
	    document.getElementById("output").innerHTML = "100: " + teamName + " not found.</b>";
	}
    })();
}