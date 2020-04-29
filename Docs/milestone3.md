Database:

Our database is reading in the username, the team name, and the six pokemon numbers entered by the user on the teams page.  

Teams document  
{  
    username: string, //The username of the user  
    teamName: string, //The desired team name  
    pokemon1: integer, //The first inputted pokemon ID number  
    pokemon2: integer, //The second inputted pokemon ID number  
    pokemon3: integer, //The third inputted pokemon ID number  
    pokemon4: integer, //The fourth inputted pokemon ID number  
    pokemon5: integer, //The fifth inputted pokemon ID number  
    pokemon6: integer //The sixth inputted pokemon ID number  
}  

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


Division of Labor:
Thomas Guaetta:
1. Worked alongside Jeenil to get the teamCreate function working in order to connect to mongoDB and correctly write to the database
2. Created the teamUpdate function so it correctly updates a field in the mongoDB
3. Worked alongside Jeenil (with help from William) in order to get the secrets.json to work for the purpose of holding the mongoDB link
4. Polished off HTML & CSS for the pages to be sure the site looks the best it can  

Jeenil Patel:
1. Worked with Thomas to get the teamCreate function working for it to register to MongoDB correctly and write it to the Database
2. Worked to create the readTeam function in order for the users to view the team
3. Worked alongside Thomas (with help from William) in order to get the secrets.json to work for the purpose of holding the mongoDB link
4. Created the mongoDB database for the team and did the Reveal Config variables (password stuff)

Anthony Hong: