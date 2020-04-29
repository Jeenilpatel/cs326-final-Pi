import { request } from "https";

let http = require('http');
let url = require('url');
let express = require('express');

export class MyServer {

    private theDatabase;

    // Server stuff: use express instead of http.createServer
    private server = express();
    //private port = 8080;
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
	// Serve static pages from a particular path.
	this.server.use('/', express.static('./html'));

	this.server.use(express.json());//for post

	// Set a single handler for a route.
	this.router.post('/users/:userId/create', this.createHandler.bind(this));
	console.log(JSON.stringify(request));
	// Set multiple handlers for a route, in sequence.
	this.router.post('/users/:userId/read',   [this.errorHandler.bind(this), this.readHandler.bind(this) ]);
	this.router.post('/users/:userId/update', [this.errorHandler.bind(this), this.updateHandler.bind(this)]);
	this.router.post('/users/:userId/delete', [this.errorHandler.bind(this), this.deleteHandler.bind(this)]);
	// Set a fall-through handler if nothing matches.
	this.router.post('*', async (request, response) => {
	    response.send(JSON.stringify({ "result" : "command-not-found" }));
	});
	// Start up the counter endpoint at '/counter'.
	this.server.use('/counter', this.router);
    }

    private async errorHandler(request, response, next) : Promise<void> {
	let value : boolean = await this.theDatabase.isFound(request.params['userId']+"-"+request.body.name);
	if (!value) {
	    response.write(JSON.stringify({'result' : 'error'}));
	    response.end();
	} else {
	    next();
	}
    }
    
    private async createHandler(request, response) : Promise<void> {
	console.log("ENTERS createHandler FUNCTION");
	await this.createCounter(request.params['userId'] + "-" + request.body.name, request.body.pokemon1, request.body.pokemon2, request.body.pokemon3, request.body.pokemon4, request.body.pokemon5, request.body.pokemon6, response);
	}

    private async readHandler(request, response): Promise<void> {
	console.log("ENTERS readHandler FUNCTION");
	await this.readCounter(request.params['userId'] + "-" +  request.body.name, response);
    }

    private async updateHandler(request, response) : Promise<void> {
	console.log("ENTERS updateHandler FUNCTION");
	await this.updateCounter(request.params['userId'] + "-" + request.body.name, request.body.pokemon1, request.body.pokemon2, request.body.pokemon3, request.body.pokemon4, request.body.pokemon5, request.body.pokemon6, response);
    }

    private async deleteHandler(request, response) : Promise<void> {
        await this.deleteCounter(request.params['userId']+"-"+request.body.name, response);
    }

    public listen(port) : void  {
		this.server.listen(port);
	}
	
    public async createCounter(name: string, pokemon1: number, pokemon2: number, pokemon3: number, pokemon4: number, pokemon5: number, pokemon6: number, response) : Promise<void> {
		await this.theDatabase.putTeam(name, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);
		response.write(JSON.stringify({'result' : 'created',
						'name' : name,
						'pokemon 1' : pokemon1,
						'pokemon 2' : pokemon2,
						'pokemon 3' : pokemon3,
						'pokemon 4' : pokemon4,
						'pokemon 5' : pokemon5,
						'pokemon 6' : pokemon6
			}
		));
		response.end();
	}
	
    public async errorCounter(name: string, response) : Promise<void> {
		response.write(JSON.stringify({'result': 'error'}));
		response.end();
    }

    public async readCounter(name: string, response) : Promise<void> {
	let value = await this.theDatabase.getTeam(name);
	response.write(JSON.stringify({'result' : 'read',
				       	'name' : name,
						'pokemon 1' : value['pokemon1'],
						'pokemon 2' : value['pokemon2'],
						'pokemon 3' : value['pokemon3'],
						'pokemon 4' : value['pokemon4'],
						'pokemon 5' : value['pokemon5'],
						'pokemon 6' : value['pokemon6'],
		}
	));	
	response.end();
    }

    public async updateCounter(name: string, pokemon1: number, pokemon2: number, pokemon3: number, pokemon4: number, pokemon5: number, pokemon6: number, response) : Promise<void> {
	await this.theDatabase.putTeam(name, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);
	console.log("ENTERS updateCounter FUNCTION");
	response.write(JSON.stringify({'result' : 'created',
					'name' : name,
					'pokemon 1' : pokemon1,
					'pokemon 2' : pokemon2,
					'pokemon 3' : pokemon3,
					'pokemon 4' : pokemon4,
					'pokemon 5' : pokemon5,
					'pokemon 6' : pokemon6
		}
	));
	response.end();
    }
    public async deleteCounter(name : string, response) : Promise<void> {
        await this.theDatabase.del(name);
        response.write(JSON.stringify({'result' : 'deleted',
                           'value'  : name }));
        response.end();
    }
};
