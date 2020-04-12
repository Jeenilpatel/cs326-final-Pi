'use strict';
import app = require('express');
import { Database } from './Pokedex-databse';
import { MyServer } from './server';

const theDatabase = new Database("mongodb+srv://Jeenil:1234@cs326finalproject-xfsi3.mongodb.net/test?retryWrites=true&w=majority");
const theServer = new MyServer(theDatabase);



const UserRouter = require('./Routes/user')

theServer.listen(8080);
