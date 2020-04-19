import { resolve } from "dns";


let http = require('http');
let url = require('url');

export class MyServer {

    private theDatabase;
    private server;

    private headerText = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    };

    constructor(db) {
        this.theDatabase = db;
        this.server = http.createServer();
        this.server.on('request', this.handler.bind(this));
    }

    /*
    A function to route the various urls to their respective functions
    ie. /read should call readCounter()
    */
    public async handler(request,response, ) {
        let options = url.parse(request.url, true).query;

        if (request.url.startsWith("/view")) {
             this.viewPokemon(options.id, response);
            return;
        }
        //let found = await this.theDatabase.isFound(options.name);
        //response.end();

    }

    public listen(port) : void {
        this.server.listen(port);
    }

    public async viewPokemon(id: number, response) : Promise<void> {
        // Your code 
        let pokemonData = await this.theDatabase.findPokemonByID(id);
        console.log(pokemonData);
        response.write(JSON.stringify(pokemonData));
    response.end();
    }
}

