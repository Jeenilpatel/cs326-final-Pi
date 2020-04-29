'use strict';

import { Database } from './mongo-database';
import { MyServer } from './myserver-routing';

const theDatabase = new Database('PokemonTeams'); // CHANGE THIS
const theServer = new MyServer(theDatabase);

//theServer.listen(process.env.PORT);
theServer.listen(8080);