Part 0 Project API planning

The PokeAssist API is based on REST principles. Data resources are accessed via standard HTTPS requests in UTF-8 format to an API endpoint. Where possible, Web API uses appropriate HTTP verbs for each action:
Method 	Action
GET 	Retrieves resources
POST 	Creates resources
PUT 	Changes and/or replaces resources or collections
DELETE 	Deletes resources



A brief and precise representation of APIs for you application
- At least one set of four screenshots of your client interface with descriptions
- The URL of your Heroku Application
- Breakdown of the division of labor 


The website has few things that were implemented by all of us. After we created the base layout of our site we decided to add another page where, once the user is logged in they can create a team of 6 pokemon and perform the CRUD operations that we learned in class. The API we used for this project was a restful API design and we are using a website called PokeAPI that’s a server held by a different website and we are interacting with it in order to retrieve the Pokemon information required for the Pokedex page and for the team building page, which will eventually store the Users - Username,Password,  Team Name, and the associated Pokemon within each team on our MongoDB database. 

    
1. /index.html
This page is the home page for our website, and will be the first thing viewable by the users when you go on the website. It will also have a few buttons that will be “submit” and 
“submit” - This will simply be the register page where you can put your credentials and create an account.
“Already have an Account” - This button will take you to a different page which will let you put your username and password and login. (/Login_Page.html)

HTML Screenshot:
![HomePage]( "Home Page HTML")


2. /Pokedex_Page.html
This page is the Pokedex Page where it will use some client side JS, and make some API calls and then fetch the 151 Pokemon and creta a card for each of them. If you hover over any of the cards it has bounce to it giving the user an idea to click on it for more information. Once the user has clicked on any one Pokemon it will then create a pop up window with some of the necessary information related to that Pokemon, for example: Type, Stats, and height, weight and an image of the Pokemon is also viewable.
    This page is view only and if clicked on the Pokemon you can interact with it. There is also a top button on the right which simply takes the user back to the top of the page so they don’t have to scroll back to the top. The popup also has a close button on the top right side of the page to close the window after you have finished looking at the Pokemon. Once a Pokemon is clicked on it also saves the information of the Pokemon in the cach so it loads faster the next time you are on that Pokemon. 

![Pokedex]( "Pokedex p1")
![Pokedex]( "Pokedex p2")


3. /Team_Page.html
The teams page is what will be the only users who have logged in can use. It will be a page where you can create Teams, name the teams, Edit, update the teams and even delete the teams. It will save the data associated with each user and Team on the database. 

- Create Team - The user can choose any time name they desire, along with any Pokemon, that they want on the team. Once the user has put the ID # associated with the Pokemon they can hit create team - Once they hit create team the name of the team should be viewable on the page. 

- View Team - They can use the View Team button to retrieve the team again or view the team using that button, it will make a call to the database and fetch the ID of the associated Pokemon on that team and replace the shaking Pokeball with the correct Pokemono on that team. 

- Update Team - This can be used after you create the Team. You can use the View Team button that will make a call to the Database and show you the team, and once you change the ID of the Pokemon you wish to change it will update and save the team accordingly. 

- Delete Team - Once you get the team Back all you have to do is, call the team back using the view team button and hit the Delete Team at that point it will erase the data associated with that team name and Pokemon attached  to it. 

![Teams]( "Teams p1")
![Teams]( "Teams p2")
![Teams]( "Teams p3")

4. /Interactive_Map.html

The interactive Map is a map of the pokemon world in the first generation of the game. On this page users can explore the map by clicking on cities, and then information will show next to map about the city. The information that will be included are the city name and the pokemons you can find in those cities. This map allows users to see which city they will be able to find the pokemon they want to catch.



![Interactive Map]( "Interactive Map p1")
![Interactive Map]( "Interactive Map p2")


5. /Type_Calculator.html

The type calculator will allow users to input one or two types of pokemon of their choice and will return a list of the types of pokemon that they are strong against, weak against, normal strength against, or invunerable to. This will help the users to figure out what weaknesses their team will have and can help them in battle to figure out what moves they should use against any given pokemon.

 

![Type Calculator]( "Type Calculator p1")
![Type Calculator]( "Type Calculator p2")


6. /Login_Page.html
This will make calls to the database and check for the user input credentials and let the user login to the account. It has an input for Username and Password

![Login Page]( "Login")


Breakdown of the divison of labor:


Thomas Guaetta:
1. 
2. 
3. 
4. 
5. 
6. 

Jeneil Patel:
1. Worked on the PokedexPage client side JS and CSS 
2. Help implemeting creating parts of the teams page backend JS and and client side intractions along with the HTML and CSS
3. Worked on the routing stuff 
4. Made markdown file and added screenshots 
5. Helped wiht setting up database stuff
6. Created a MongoDB databse in order to save infomration about the Users and information associated wiht them.

Anthony Hong:
1. 
2. 
3. 
4. 
5. 
6. 