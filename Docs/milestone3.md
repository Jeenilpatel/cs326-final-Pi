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
Worked alongside Jeenil to get the teamCreate function working in order to connect to mongoDB and correctly write to the database
Created the teamUpdate function so it correctly updates a field in the mongoDB
Worked alongside Jeenil (with help from William) in order to get the secrets.json to work for the purpose of holding the mongoDB link
Polished off HTML & CSS for the pages to be sure the site looks the best it can

Jeenil Patel:

Anthony Hong: