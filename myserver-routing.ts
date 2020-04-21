let http = require('http');
let url = require('url');
let express = require('express');

export class MyServer {

    private theDatabase;

    // Server stuff: use express instead of http.createServer
    private server = express();
    private port = 8080;
    private router = express.Router();

    constructor(db) {
	this.theDatabase = db;
	// from https://enable-cors.org/server_expressjs.html
	this.router.use((request, response, next) => {
	    response.header('Content-Type','application/json');
	    response.header('Access-Control-Allow-Origin', '*');
	    response.header('Access-Control-Allow-Headers', '*');
	    next();
    });
    

    this.router.get('/create', this.createHandler.bind(this));
   

    
	//// HANDLE ERRORS WITH A WILDCARD (*)
	this.router.get('', async (request, response) => {
        response.send(JSON.stringify({ "result" : "command-not-found" }));
    });

	// Start up the counter endpoint at '/counter'.
	this.server.use('/counter', this.router);
    }

    private async createHandler(request, response) : Promise<void> {
        await this.createCounter(request.params['userId']+"-"+request.query.name);
        }

    private async errorHandler(request, response, next) : Promise<void> {
        let value : boolean = await this.theDatabase.isFound(request.params['userId']+"-"+request.query.name);
        if (!value) {
            response.write(JSON.stringify({'result' : 'error'}));
            response.end();
        } else {
            next();
        }
        }
        





};