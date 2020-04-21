const url = "http://localhost:8080/counter"; // NOTE NEW URL

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
