Part 0 Project API planning

The PokeAssist API is based on REST principles. Data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Where possible, Web API uses appropriate HTTP verbs for each action:
Method 	Action
GET 	Retrieves resources
POST 	Creates resources
PUT 	Changes and/or replaces resources or collections
DELETE 	Deletes resources


Flowchart:
![Flowchart](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/API_Flowchart.JPG "Flowchart")


A brief and precise representation of APIs for you application
- At least one set of four screenshots of your client interface with descriptions
- The URL of your Heroku Application
- Breakdown of the division of labor 


The website has few things that were implemented by all of us. After we created the base layout of our site we decided to add another page where, once the user is logged in they can create a team of 6 pokemon and perform the CRUD operations that we learned in class. The API we used for this project was a restful API design and we are using a website called PokeAPI that’s a server held by a different website and we are interacting with it in order to retrieve the Pokemon information required for the Pokedex page and for the team building page, which will eventually store the Users - Username,Password,  Team Name, and the associated Pokemon within each team on our MongoDB database. 

    
1. /index.html
This page is the home page for our website, and will be the first thing viewable by the users when you go on the website. It will also have a few buttons that will be “submit” and 

JS Functions Used:
signUp: reads in the entered username and password fields. Will later save it to the database once we learn to create accounts.

HTML Screenshot:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Home%20Page.png "Home Page HTML")
![HomePage2](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/HomePagePopup.JPG "Home Page popup")


2. /Pokedex_Page.html
This page is the Pokedex Page where it will use some client side JS, and make some API calls and then fetch the 151 Pokemon and creta a card for each of them. If you hover over any of the cards it has bounce to it giving the user an idea to click on it for more information. Once the user has clicked on any one Pokemon it will then create a pop up window with some of the necessary information related to that Pokemon, for example: Type, Stats, and height, weight and an image of the Pokemon is also viewable.
    This page is view only and if clicked on the Pokemon you can interact with it. There is also a top button on the right which simply takes the user back to the top of the page so they don’t have to scroll back to the top. The popup also has a close button on the top right side of the page to close the window after you have finished looking at the Pokemon. Once a Pokemon is clicked on it also saves the information of the Pokemon in the cach so it loads faster the next time you are on that Pokemon. 

![Pokedex](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Pokdex%20p1.png "Pokedex p1")
![Pokedex](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Pokedex%20p2.png "Pokedex p2")

JS Functions Used: fetchPokemon(), ShowPokemon(), SlectedPokemon, Popup(), closePopup()

fetchPokemon() => Fetches the first 151 Pokemon from the PokeAPI and in the form of JSON, it fectechs the related data and the image of the pokemons.

ShowPokemon() => Displays the Pokemon in a card format and creates a card for the first 151 Pokemon and uses the async funciton ShowPokemon()

ShowPokemon() => Creates cards for all the Pokemon that were Fetched and uses the async function SelectedPokemon

SelectedPokemon() => Simply goes to function popup and before that goes and grabs the particualr Pokemons id dpending on what the user has selected

Popup() => Creates a popup with the information of the Pokemon (Stats, weight, Type etc.) and cretes a table for the stats and type.

closePopup() => Simply closes the popup when Pokemon is selcted if the X is clicked



3. /Team_Page.html
The teams page is what will be the only users who have logged in can use. It will be a page where you can create Teams, name the teams, Edit, update the teams and even delete the teams. It will save the data associated with each user and Team on the database. 

JS Functions Used:

Create Team: The user can choose any time name they desire, along with any Pokemon, that they want on the team. Once the user has put the ID # associated with the Pokemon they can hit create team - Once they hit create team the name of the team should be viewable on the page. 

View Team: They can use the View Team button to retrieve the team again or view the team using that button, it will make a call to the database and fetch the ID of the associated Pokemon on that team and replace the shaking Pokeball with the correct Pokemono on that team. 

Update Team: This can be used after you create the Team. You can use the View Team button that will make a call to the Database and show you the team, and once you change the ID of the Pokemon you wish to change it will update and save the team accordingly. 

Delete Team: Once you get the team Back all you have to do is, call the team back using the view team button and hit the Delete Team at that point it will erase the data associated with that team name and Pokemon attached  to it. 

![Teams](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Teams-page%20p1.png "Teams p1")
![Teams](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Teams-page%20p2.png "Teams p2")
![Teams](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Teams-page%20p3.png "Teams p3")



4. /Interactive_Map.html

The interactive Map is a map of the pokemon world in the first generation of the game. On this page users can explore the map by clicking on cities, and then information will show next to map about the city. The information that will be included are the city name and the pokemons you can find in those cities. This map allows users to see which city they will be able to find the pokemon they want to catch.

JS Functions Used:
Pewder(), Celadon(), Viridian(), Pallet(), Cinnabar(), Fuchisia(), Saffron(), Cerulean(), Lavender(), Vermillion(): clicking the button will display information about the town and also the pokemon you will be able to find in that specific area respective to the town names

![Interactive Map](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Maps%20p1.png "Interactive Map p1")
![Interactive Map](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Mapes%20p2.png "Interactive Map p2")


5. /Type_Calculator.html

The type calculator will allow users to input one or two types of pokemon of their choice and will return a list of the types of pokemon that they are strong against, weak against, normal strength against, or invunerable to. This will help the users to figure out what weaknesses their team will have and can help them in battle to figure out what moves they should use against any given pokemon.

![Type Calculator](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Type-calc%20p1.png "Type Calculator p1")
![Type Calculator](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Type-calc%20p2.png "Type Calculator p2")

JS Functions Used:

typeCalculator: gets the value of the two selected types and multiplies the “types” array against each other to find a weakness matrix to display

normalType, fireType, fightingType, waterType, flyingType, grassType, poisonType, electricType, groundType, psychicType, rockType, iceType, bugType, dragonType, ghostType, darkType, steelType, fairyType, noType: Updates the CSS & HTML accordingly to the type chosen

repeat: checks for if type1 and type2 are both the same selected type, and sets type2 to none if so


6. /Login_Page.html
This will make calls to the database and check for the user input credentials and let the user login to the account. It has an input for Username and Password & will read in/confirm if you input them correctly.

![Login Page](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Login.png "Login")
![Login Page2](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone2%20Images/Login%20Popup.PNG "Login Page popup")

JS Functions Used:

login(): reads in the entered username and password fields. Will later pull from database to find the user and log them in.


3. Herkou App Link: https://thawing-inlet-12172.herokuapp.com/index.html


Breakdown of the divison of labor:

Thomas Guaetta:
1. Created the JS for type calculator
2. worked on creating the teams page HTML
3. Created the teams page javascript in order to pull from the pokeAPI
4. Condensed the Javascript files into one
5. Worked on getting the project onto heroku
6. Created various functions to be used with the database (in milestone 3)
7. Added popups for login/signup to confirm the user entered their information

Jeneil Patel:
1. Worked on the PokedexPage client side JS and CSS 
2. Help implemeting creating parts of the teams page backend JS and and client side intractions along with the HTML and CSS
3. Worked on the routing stuff 
4. Made markdown file and added screenshots 
5. Helped with setting up database stuff
6. Created a MongoDB databse in order to save infomration about the Users and information associated wiht them.

Anthony Hong:
1. Helped with markdown file.
2. worked on JS for interactive map 
3. worked on JS for and client side for teams page
4. Helped with server side on teams page