const url = "http://localhost:8080/counter"; // NOTE NEW URL

//Interactive Map
function Pewter(){
document.getElementById('TownName').innerHTML = 'Pewter City';
document.getElementById('maplist').innerHTML = '<li> Weedle </li> <li> Caterpie</li><li> kakuna </li> <li> Metapod</li><li> Pikachu </li> <li> Pidgey</li><li> Pidgeotto</li>';      
document.getElementById("mapDesc").innerHTML = 'Pewter City is a city located in northwest Kanto. The locale lies between Viridian Forest (via Route 2) and Mt. Moon (via Route 3). The most notable resident of the city is Brock, the Pewter City Gym Leader. '
}
function Celadon(){
document.getElementById('TownName').innerHTML = 'Celadon City';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li> <li> Poliwhirl</li><li> Slowpoke </li> <li> Eevee</li>' ;
document.getElementById('mapDesc').innerHTML = 'Celadon City is located in central Kanto. It is the most populous city in Kanto and the eighth most populous in the Pokémon world, surpassing even Saffron City in the east. The city has two entrances, one from the east via Route 7, and one from the west via Route 16. Celadon is the main place to spend money in Kanto, through the Celadon Department Store and the Celadon Game Corner. It is the home of the Celadon Condominiums, where residents of the city live, and the Celadon Hotel, where visitors can rest. Celadon is also home to Erika, the citys Gym Leader, and Eusine, the hunter who pursues Suicune. '
}
function Virdian(){
document.getElementById('TownName').innerHTML = 'Virdian City';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li> <li> Tentacool</li>' ;
document.getElementById('mapDesc').innerHTML = 'Viridian City is a small city located in western Kanto. In the Generation I and Generation III games, Team Rocket leader Giovanni serves as Leader of the Ground-specialist Viridian Gym, but the Gym is locked until the player has gained the other seven League Badges. Blue is the Gym Leader in the Generation II and Generation IV games and trains Pokémon of various types. Three major paths lead from the city center. To the north is Route 2, as well as Viridian Forest, which lies in the middle of the route, leading to Pewter City. To the south is Route 1, which leads to Pallet Town. To the west is Route 22, leading to Indigo Plateau and the Pokémon League. In the Generation II games and Pokémon HeartGold and SoulSilver, the city is known as "the Gateway to Indigo Plateau".'
}
function Pallet(){
document.getElementById('TownName').innerHTML = 'Pallet Town';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li> <li> Tentacool</li><li> Staryu </li> <li> Bulbasaur</li><li> Charmander </li> <li> Squirtle</li><li> Pikachu </li>';
document.getElementById('mapDesc').innerHTML = 'Pallet Town is located in western Kanto and serves as the hometown of Red, the protagonist of the Generation I games, as well as Blue and several other notable Pokémon Trainers who begin their Pokémon journeys in Kanto. Professor Oaks Laboratory is in Pallet Town, where the famous Pokémon Professor conducts his research. The small town is accessible in two ways: from the north via Route 1 that leads directly to Viridian City, and from the south via Route 21, a water route, that leads to Cinnabar Island.'
}
function Cinnabar(){
document.getElementById('TownName').innerHTML = 'Cinnabar Island';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Shelder</li><li> Horsea</li><li> Goldeen </li> <li> Tentacool</li><li> Staryu </li> <li> Omanyte</li><li> Kabuto</li><li> Aerodactyl </li> <li> Electrode</li><li> seel </li><li> Tangela</li>' ;
document.getElementById('mapDesc').innerHTML = 'Cinnabar Island is a large island located off the southern coast of the Kanto region, south of Pallet Town. It is home to a large volcano. Cinnabar is a kind of red mineral, associated with hot springs and volcanoes. The island is connected to the mainland by two water routes: Route 20 in the east and Route 21 in the north, leading to Fuchsia City and Pallet Town, respectively. The journals scattered throughout the abandoned Pokémon Mansion reveal that Mewtwo was created there. The scientists at the Cinnabar Lab have the ability to resurrect Pokémon from their Fossils.'
}
function Fuchisia(){
document.getElementById('TownName').innerHTML = 'Fuchisia City';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li> <li> Seaking</li><li> Krabby</li><li> Gyarados</li>';
document.getElementById('mapDesc').innerHTML = 'Fuchsia City is a city located in southwest Kanto. Its most distinguishing features are the Safari Zone in the Generation I and III games and the Poison-type Gym. Koga is the Fuchsia City Gym Leader until his daughter Janine takes over in the Generation II and IV games. Route 15 leads into the city from the east, Route 18 from the west, and the beach of Route 19 is in the south. Bills grandfather lives in Fuchsia City. In Generation II, the Safari Zone is closed down. In the Generation IV remakes, Pal Park replaces the closed-down Safari Zone. In Pokémon: Lets Go, Pikachu! and Lets Go, Eevee!, the zoo in the city is referred to as the Safari Zone, while the former Safari Zones location is now occupied by GO Park.'
}
function Saffron(){
document.getElementById('TownName').innerHTML = 'Saffron City';
document.getElementById('maplist').innerHTML = '<li> Hitmonlee </li> <li> Hitmonchan</li><li> Goldeen </li> <li> Seaking</li><li> Krabby</li><li> Gyarados</li>' ;
document.getElementById('mapDesc').innerHTML = 'Saffron City is a sprawling metropolis in the Kanto region. It lies in between Celadon City, Vermilion City, Lavender Town, and Cerulean City. It is home to Sabrina, the citys Gym Leader. It is modeled after Japans capital city of Tokyo and is the largest and one of the busiest cities in Kanto, being famous even in other regions. It is the tenth most populous city in the Pokémon world and one of the only cities in Kanto that has enough visible houses to accommodate its population in the games. The large Silph Co. headquarters building stands firm as the citys centerpiece while two Gyms dominate the northeastern corner district. Not only is this the central business district of Kanto, it also holds the regions largest infrastructure, including the Magnet Train station, which allows ease of access between Kanto and Johto.'
}
function Cerulean(){
document.getElementById('TownName').innerHTML = 'Cerulean City';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li> <li> Psyduck</li><li> Krabby</li><li> Seaking</li><li> Bulbasaur</li><li> Jynx</li>' ;
document.getElementById('mapDesc').innerHTML = 'Cerulean City is a seaside city located in northern Kanto. It is situated near a sea inlet to the north, with Saffron City to the south, and Mt. Moon to the west. It is home to Misty, the Cerulean City Gym Leader. The city is one of only two cities in Kanto to have four different routes enter the city, the other being Saffron City. Cerulean is a mid-sized city with a few attractions, including the Bike Shop and the Berry Powder man.'
}
function Lavender(){
document.getElementById('TownName').innerHTML = 'Lavender City';
document.getElementById('maplist').innerHTML = '<li> Gastly </li> <li> Cubone</li><li> Haunter </li>' ;
document.getElementById('mapDesc').innerHTML = 'Lavender Town is a small town located in northeast Kanto, just south of the Rock Tunnel. The citizens of Lavender Town in Generations I, III, and VII claim Lavender Town is known mainly for ghost sightings in the Pokémon Tower and as the main gravesite of Pokémon. In Generations II and IV, the town is noticeably modernized with the inclusion of a broadcasting station. The citizens claim the ghosts that appear in the Tower are the spirits of Pokémon that have died. North of Lavender is Route 10 and the Rock Tunnel. West of the town is Route 8, while to the south is Route 12 and the Silence Bridge.'
}
function Vermillion(){
document.getElementById('TownName').innerHTML = 'Vermillion City';
document.getElementById('maplist').innerHTML = '<li> Magikarp </li> <li> Poliwag</li><li> Goldeen </li><li> Shelder </li> <li> Krabby</li><li> Tentacool </li><li> Horsea </li> <li> Staryu</li><li> Squirtle </li>' ;
document.getElementById('mapDesc').innerHTML = 'Vermilion City is a city in Kanto. Situated near a sea inlet to the south, it serves as a popular sea port for ships such as the S.S. Anne. Vermilion Harbor is a home port for many ships. The S.S. Anne sails around the world and returns to Vermilion once a year. The S.S. Aqua sails from Olivine City in Johto to Vermilion Harbor. The Seagallop Ferries sail regularly to all of the Sevii Islands. Aside from the harbor, the other exits to the city are Route 11 and Digletts Cave to the east. North of the city is Route 6.'
}

//Type Calc
var types = new Array(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],          // Normal
    [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],      // Fire
    [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],        // Water
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],        // Electric
    [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],// Grass
    [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],      // Ice
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],    // Fighting
    [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],      // Poison
    [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],          // Ground
    [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],        // Flying
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],          // Psychic
    [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],// Bug
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],        // Rock
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],            // Ghost
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],            // Dragon
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],        // Dark
    [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],      // Steel
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],        // Fairy
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);             // None
    
    var type_name = new Array("Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", 
    "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
);

function typeCalculator(){
		var type1 = document.getElementById("type1").value;
		var type2 = document.getElementById("type2").value;
		var result = new Array();
		var i;
			for (i=0; i<=18; i++)
			{
				result[i] = (types[i][type1] * types[i][type2]);
            }
        document.getElementById("Normal").innerHTML = result[0] + "x"
        document.getElementById("Fire").innerHTML = result[1] + "x"
        document.getElementById("Water").innerHTML = result[2] + "x"
        document.getElementById("Electric").innerHTML = result[3] + "x"
        document.getElementById("Grass").innerHTML = result[4] + "x"
        document.getElementById("Ice").innerHTML = result[5] + "x"
        document.getElementById("Fighting").innerHTML = result[6] + "x"
        document.getElementById("Poison").innerHTML = result[7] + "x"
        document.getElementById("Ground").innerHTML = result[8] + "x"
        document.getElementById("Flying").innerHTML = result[9] + "x"
        document.getElementById("Psychic").innerHTML = result[10] + "x"
        document.getElementById("Bug").innerHTML = result[11] + "x"
        document.getElementById("Rock").innerHTML = result[12] + "x"
        document.getElementById("Ghost").innerHTML = result[13] + "x"
        document.getElementById("Dragon").innerHTML = result[14] + "x"
        document.getElementById("Dark").innerHTML = result[15] + "x"
        document.getElementById("Steel").innerHTML = result[16] + "x"
        document.getElementById("Fairy").innerHTML = result[17] + "x"
}

//CSS changing
function normalType(type){
    document.getElementById(type).innerHTML = "Normal";
    document.getElementById(type).className = "button_display normalType";
    document.getElementById(type).style.visibility = 'visible';
    document.getElementById(type).value = "0";
}

function fireType(type){
    document.getElementById(type).innerHTML = "Fire";
    document.getElementById(type).className = "button_display fireType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "1";

}

function fightingType(type){
    document.getElementById(type).innerHTML = "Fighting";
    document.getElementById(type).className = "button_display fightingType";
    document.getElementById(type).style.visibility = 'visible';
    document.getElementById(type).value = "6"; 

}

function waterType(type){
    document.getElementById(type).innerHTML = "Water";
    document.getElementById(type).className = "button_display waterType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "2"; 

}

function flyingType(type){
    document.getElementById(type).innerHTML = "Flying";
    document.getElementById(type).className = "button_display flyingType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "9"; 

}

function grassType(type){
    document.getElementById(type).innerHTML = "Grass";
    document.getElementById(type).className = "button_display grassType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "4"; 

}

function poisonType(type){
    document.getElementById(type).innerHTML = "Poison";
    document.getElementById(type).className = "button_display poisonType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "7"; 

}

function electricType(type){
    document.getElementById(type).innerHTML = "Electric";
    document.getElementById(type).className = "button_display electricType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "3"; 

}

function groundType(type){
    document.getElementById(type).innerHTML = "Ground";
    document.getElementById(type).className = "button_display groundType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "8"; 

}

function psychicType(type){
    document.getElementById(type).innerHTML = "Psychic";
    document.getElementById(type).className = "button_display psychicType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "10"; 

}

function rockType(type){
    document.getElementById(type).innerHTML = "Rock";
    document.getElementById(type).className = "button_display rockType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "12"; 

}

function iceType(type){
    document.getElementById(type).innerHTML = "Ice";
    document.getElementById(type).className = "button_display iceType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "5"; 

}

function bugType(type){
    document.getElementById(type).innerHTML = "Bug";
    document.getElementById(type).className = "button_display bugType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "11"; 

}

function dragonType(type){
    document.getElementById(type).innerHTML = "Dragon";
    document.getElementById(type).className = "button_display dragonType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "14"; 

}

function ghostType(type){
    document.getElementById(type).innerHTML = "Ghost";
    document.getElementById(type).className = "button_display ghostType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "13"; 

}

function darkType(type){
    document.getElementById(type).innerHTML = "Dark";
    document.getElementById(type).className = "button_display darkType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "15"; 

}

function steelType(type){
    document.getElementById(type).innerHTML = "Steel";
    document.getElementById(type).className = "button_display steelType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "16"; 

}

function fairyType(type){
    document.getElementById(type).innerHTML = "Fairy";
    document.getElementById(type).className = "button_display fairyType";
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "17"; 

}

function noType(type){
    document.getElementById(type).innerHTML = "None";
    document.getElementById(type).className = "button_display"; 
    document.getElementById(type).style.visibility = 'visible'; 
    document.getElementById(type).value = "18"; 

}

function repeat(){
    if(document.getElementById("type1").innerHTML == document.getElementById("type2").innerHTML){
        document.getElementById("type2").innerHTML = "None";
        document.getElementById("type2").className = "button_display";
        document.getElementById("type2").value = "18"; 
    }
    typeCalculator();
}

//Teams
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

function HTML_Image_Update(){
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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


