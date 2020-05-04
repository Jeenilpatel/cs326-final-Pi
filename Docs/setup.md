Project Title -  PokeAssist

The proejct was inspired by the Pokemon games, and we wanted to crete somthign that can be used by the Fans and ourselves included while trying to learn some Wevelopment. 

1. Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

2. Prerequisites

What things you need to install in order for the proejct to run and locally tested:

- First you need to clone the Repo & and install the requireed Packages for the project to run:
    - Step 1: Open Termial on a Mac OR Command Prompt on the Windows
    - Step 2:Change the current working directory to the location where you want the cloned directory to be made.
        - Run the command 1: git clone https://github.com/Jeenilpatel/cs326-final-Pi.git
        - Run the command 2: cd cs326-final-Pi 
        - Run the command 3: npm install
        - Run the command 4: npm install Express
        - Run the command 5: npm install mongodb
        - Run the command 6: npm install typescript

- Once you have succssfuly run all the previous commands:

    - Step 3: Open the project folder in whatever software you will be editing the code. I reccomend Visual Studios you can downlaod it here - https://code.visualstudio.com/download 
    - Step 4: Open the file named - client.js
    - Setp 5: Do the following:
        - Comment out the Heroku link [const url = "https://thawing-inlet-12172.herokuapp.com/counter";] and then uncommnet the [const url = "http://localhost:8080/counter";]; // You are doing this in order to view the webapp in locally and test it and change things. 

    - Step 6: You will also need to create a MongoDB Atlas acoount here - https://account.mongodb.com/account/login 
    - Step 7: Once you created an account and sucessfully followed the procedures to create a clusutre, Whilist your IP Address and Create a Database User for Your Cluste. "https://docs.atlas.mongodb.com/getting-started/" 
        - a. Go copy the connection String uder the connect tab in the clusutre. It will look something like this ""mongodb+srv://guest:<password>@cluster0-y0tyl.mongodb.net/test?retryWrites=true&w=majority"
        - b. Create a new file named "secrets.json" in the main folder with the myserver-databse.ts file 
        - c. In the file Past the folling thing: {"password": "THE String you just copied"}
        - d. Make sure you put the password wher it says '<passowrd>' without the less then and greater then sign.
        - e. Once you did all of this and saved it you should be all set to see how things are getting saved to the database and if it's working. 

- Once you have succssfuly followed the previous steps: Simply navigate to the project derictory using Termail or CDM:
    - Run the command: ts-node --prefer-ts-exts server-main.ts 
This should start up the server and you should be able to view the webapp in your broswer. Simply launch a webbrowers and type in the following URL: http://localhost:8080/ the site should be up and running!


To test out the currnt state of the web app visit - https://thawing-inlet-12172.herokuapp.com/ 
    


