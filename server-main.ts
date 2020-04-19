'use strict';

import { Database } from './mongo-database';
import { MyServer } from './myserver-routing';

const theDatabase = new Database('mongodb+srv://Jeenil:1234@cs326finalproject-xfsi3.mongodb.net/test?retryWrites=true&w=majority'); // CHANGE THIS
const theServer = new MyServer(theDatabase);

theServer.listen(8080);
