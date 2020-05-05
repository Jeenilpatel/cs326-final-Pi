Title: Team Pi
Subtitle: Poke-Assistant
Semester: Spring 2021

Overview:
Pokemon is a series of video games developed by Game Freak and published by Nintendo. The games are massively popular, so much so that 
they are the highest grossing franchise in existence, with an estimated total revenue of $90 billion. In the pokemon games, there are hundreds 
of these creatures (known as pokemon), and each have their own classifications known as their type (a kind of element that determines their attacks).

Our application would be an assistant for the game that players can use in coordination with the game. This would include various tools such as an interactable pokemon tracker/list, a lookup for pokemon statistics and a calculator for pokemon weaknesses.

Team Members: 
Thomas Guaetta (Tguaetta), Jeenil Patel (Jeenilpatel), Anthony Hong (honganthony)


User Interface:

Home Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/Homepage1.png "Home Page HTML")

The homepage is where the user will be led upon entry of the website. It allows for the user to create a login, which will check to see if they have entered the correct parameters as needed. It will also give them an option of going to the sign in page if they already have an account created.

Example of a user creating an account:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/Homepage2.png "Home Page HTML")

Example of a user incorrectly entering information:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/Homepage3.png "Home Page HTML")

Pokedex Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/Pokedex1.png "Home Page HTML")

The Pokedex page is where users can see a list of the original 151 pokemon as available in the game. This is similar to how in the games the player has a pokedex that they will be able to view the pokemon, but on our website we allow the users to click on the pokemon to see a more detailed information page with info such as their base stats, their height and their weight. 

Example of a user clicking on a pokemon:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/Pokedex2.png "Home Page HTML")

Teams Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage1.png "Home Page HTML")

The teams page is where a user can create a team with 6 pokemon and it will be tracked on the database. This aligns with how in the game series the player is able to have up to 6 pokemon at a time; so the user can use this page to plan out their in-game team. It takes in the username of the user, the desired team name, and the 6 numbers corresponding to the pokemon in the pokedex (as with the main game). This is where our website shows the elements of CRUD. The create team button reads in all the elements and creates a team on the database using POST. The read team button uses GET to fetch the team from the database the matches the username and the team name inputted by the user. The update button acts similarly to the create button, but instead requires an already created team to be updated. It reads in the username, team name and 6 pokemon and updates the database accordingly. The delete button uses GET to fetch the team from the database and delete it.

Example of a user creating a team:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage2.png "Home Page HTML")

Example of a user reading a team:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage3.png "Home Page HTML")

Example of a user updating a team:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage4.png "Home Page HTML")

Example of a user deleting a team:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage5.png "Home Page HTML")

Interactive Map:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/InteractiveMap1.png "Home Page HTML")

The interactive map is where players can see the original map from the game, and can click on a location in order to see its name, it’s available pokemon and information relating to the location in game.

Example of a user clicking on a location:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TeamsPage2.png "Home Page HTML")

Type Calculator:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TypeCalc1.png "Home Page HTML")

The type calculator allows users to input one or two pokemon types and see a table informing them of what other types it is strong or weak against. This is important for players as type weaknesses are what the battle system of the game is based upon, and any user should benefit from correctly knowing what they are strong or weak against.

Example of types being selected and output being given:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/TypeCalc2.png "Home Page HTML")

Login Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login1.png "Home Page HTML")

The login page is where a user who already has an account is able to login to said account in order to see their pre-existing teams. Similarly to the homepage, this page checks to see if the two input fields are being correctly filled out.

Example of a user correctly signing in:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login2.png "Home Page HTML")

Example of a user incorrectly signing in:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login3.png "Home Page HTML")


Login Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login1.png "Home Page HTML")

The login page is where a user who already has an account is able to login to said account in order to see their pre-existing teams. Similarly to the homepage, this page checks to see if the two input fields are being correctly filled out.

Example of a user correctly signing in:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login2.png "Home Page HTML")

Example of a user incorrectly signing in:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3_Images/login3.png "Home Page HTML")

Flowchart:
![Flowchart](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/mileston3)_Images/API_Flowchart.JPG "Flowchart")

Database:

Our database is reading in the username, the team name, and the six pokemon numbers entered by the user on the teams page.

| Column       | Data Type | Description                     |
|--------------|-----------|---------------------------------|
| username     | String    | The name of the user            |
| teamname     | String    | The name of the team            |
| pokemon1     | integer   | The value of the first pokemon  |
| pokemon2     | integer   | The value of the two pokemon    |
| pokemon3     | integer   | The value of the third pokemon  |
| pokemon4     | integer   | The value of the fourth pokemon |
| pokemon5     | integer   | The value of the fifth pokemon  |
| pokemon6     | integer   | The value of the sixth pokemon  |

URL Routes/Mapping:

url: "https://thawing-inlet-12172.herokuapp.com/counter";
The url for our website (input for url variable below)

teamCreate: url + "/users/" + userName + "/create";
This is used for the create function on the teams page

teamRead: url + "/users/" + userName + "/read";
This is used for the read function on the teams page

teamUpdate: url + "/users/" + userName + "/update";
This is used for the update function on the teams page

teamDelete: url + "/users/" + userName + "/delete";
This is used for the delete function on the teams page


Authentication/Authorization: 
When signed in, a user has the ability to save the teams they create to their account on the database. This allows them to later view them or update them if they so please. Since we were not taught how to implement this, nor given code to do so we omitted the ability to login. For the time being, the user will just have the option to input their username in a field within the teams page. The major downside is that anyone who knows a given users username and team name, they can view, edit or delete that user's teams.




Division of labor:

Thomas Guaetta:

From Milestone 1:
1. Created the wireframe layouts
2. Made markdown file and layouts for milestone1
3. Wrote type calculator information for milestone1
4. Created typeCalculator HTML & CSS
5. Helped to get navigation bar to be correctly formatted
6. Assisted in creation of home page
7. Created homepage background & selected background for all other pages
8. Migrated CSS from the individual pages to it's own styleSheet file

From Milestone 2:
1. Created the JS for type calculator
2. worked on creating the teams page HTML
3. Created the teams page javascript in order to pull from the pokeAPI
4. Condensed the Javascript files into one
5. Worked on getting the project onto heroku
6. Created various functions to be used with the database (in milestone 3)
7. Added popups for login/signup to confirm the user entered their information

From Milestone 3:
1. Worked alongside Jeenil to get the teamCreate function working in order to connect to mongoDB and correctly write to the database
2. Created the teamUpdate function so it correctly updates a field in the mongoDB
3. Worked alongside Jeenil (with help from William) in order to get the secrets.json to work for the purpose of holding the mongoDB link
4. Polished off HTML & CSS for the pages to be sure the site looks the best it can

For Final Submission:
1. Worked as a team to create our demo
2. Worked to create the final writeup

Jeenil Patel:

Milestone 1:

1. Wrote Information about the HomePage, Pokedex Page, and More Info and Login Page for M1
2. Helped with ideas on layouts over Discord. Added the tab about having Favorites.
3. Created all the base pages for Front Page, Interactive Map, Login Page, More Info Pages, Pokedex Page and created the Style_Sheet
4. Did HTML & CSS for the Home page, Login Page and Pokedex Page and other Pages that use it.
5. Added Navigation between Pages
6. Found the data and Images that we need for each Pokemon in the respective folder
7. Created a JSON file with the data for all the Pokemon from Gen 1. (Currently working on creating a database using MongoDB Atlas)
8. Helped with the background for the pages.
9. Pokedex Page - I have not printed anything for the pokemon info yet, as I am trying to figure out how to connect it to the Database. I am actually able to connect it to the server which stores all the value. If you run the file server.js it connects it. So I am trying to figure this out henceforth I have not hard coded the stuff about Pokemon info yet, because this would not be the best way to do it as it's data about 151 different entities. [OLD TESTING STUFF]

Milestone 2:

1. Worked on the PokedexPage client side JS and CSS
2. Help implementing creating parts of the teams page backend JS and and client side interactions along with the HTML and CSS
3. Created and wrote the setup.md file
4. Worked on the routing stuff
5. Made markdown file and added screenshots
6. Helped with setting up database stuff
7. Created a MongoDB database in order to save information about the Users and
8. information associated with them.
9. Deployed the Project on Heroku

Milestone 3:

1. Worked with Thomas to get the teamCreate function working for it to register to MongoDB correctly and write it to the Database
2. Worked to create the readTeam function in order for the users to view the team
3. Worked alongside Thomas (with help from William) in order to get the secrets.json to work for the purpose of holding the mongoDB link
4. Created the mongoDB database for the team and did the Reveal Config variables (password stuff)

For Final Submission:
1. Worked as a team to create our demo
2. Worked to create the final writeup


Anthony Hong:

From milestone 1:
1. Wrote information about the interactive Map
2. Helped with ideas for pokedex on discord
3. Created css for filter button on pokedex page
4. Created filer button.
5. Found picture for the map
5. Created interactive map where yiu can click on each city and see more information.

Milestone 2:
1. Helped with markdown file.
2. worked on JS for interactive map 
3. worked on JS for and client side for teams page
4. Helped with server side on teams page

Milestone 3:
1. Worked to create the deleteTeam function in order for the users to delete an already existing team

For Final Submission:
1. Worked as a team to create our demo
2. Worked to create the final writeup

Conclusion:

Through this project we have all learned how to work well as a team online, and correctly use github for sharing a project between users. More specifically (and technically), we were able to better learn how to create good looking HTML as well as CSS, create properly functioning javascript for the client-side, create proper routing that allows for databasing, connecting MongoDB to our project for the purpose of CRUD as well as getting a website up to Heroku. We definitely struggled through this project together, and have come out a lot more knowledgeable because of it. Big thanks to Ishan for his numerous hours used in Zoom with us assisting us in getting all of this running, without him we definitely would have never gotten this up to Heroku and functioning the way it does. Also thanks to William for helping us when our secrets.JSON wasn't working well with Heroku. We know you guys were very busy with this semester and greatly appreciate all the work you guys did for us. This semester has been pretty crazy but i’m glad we all made it through together.
