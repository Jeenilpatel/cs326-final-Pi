Title: Team Pi
Subtitle: Poke-Assistant
Semester: Spring 2021

Overview:
Pokemon is a series of video games developed by Game Freak and published by Nintendo. The games are massively popular, so much so that 
they are the highest grossing franchise in existence, with an estimated total revenue of $90 billion. In the pokemon games, there are hundreds 
of these creatures (known as pokemon), and each have their own classifications known as their type (a kind of element that determines their attacks).

    Our application would be an assistant for the game that players can use in coordination with the game. This would include various tools such as an 
interactable pokemon tracker/list, a lookup for pokemon statistics and a calculator for pokemon weaknesses.

Team Members: 
Thomas Guaetta (Tguaetta), Jeenil Patel (Jeenilpatel), Anthony Hong (honganthony)


User Interface:

Home Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/Homepage1.png "Home Page HTML")

The homepage is where the user will be led upon entry of the website. It allows for the user to create a login, which will check to see if they have entered the correct parameters as needed. It will also give them an option of going to the sign in page if they already have an account created.

Example of a user creating an account:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/Homepage2.png "Home Page HTML")

Example of a user incorrectly entering information:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/Homepage3.png "Home Page HTML")

Pokedex Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/Pokedex1.png "Home Page HTML")

The Pokedex page is where users can see a list of the original 151 pokemon as available in the game. This is similar to how in the games the player has a pokedex that they will be able to view the pokemon, but on our website we allow the users to click on the pokemon to see a more detailed information page with info such as their base stats, their height and their weight. 

Example of a user clicking on a pokemon:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/Pokedex2.png "Home Page HTML")

Teams Page:
![HomePage](https://github.com/Jeenilpatel/cs326-final-Pi/blob/master/Docs/milestone3_Images/TeamsPage1.png "Home Page HTML")

The teams page is where a user can create a team with 6 pokemon and it will be tracked on the database. This aligns with how in the game series the player is able to have up to 6 pokemon at a time; so the user can use this page to plan out their in-game team. It takes in the username of the user, the desired team name, and the 6 numbers corresponding to the pokemon in the pokedex (as with the main game). This is where our website shows the elements of CRUD. The create team button reads in all the elements and creates a team on the database using POST. The read team button uses GET to fetch the team from the database the matches the username and the team name inputted by the user. The update button acts similarly to the create button, but instead requires an already created team to be updated. It reads in the username, team name and 6 pokemon and updates the database accordingly. The delete button uses GET to fetch the team from the database and delete it.




Division of labor:

Thomas Guaetta:

From milestone 1:
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

