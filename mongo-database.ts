export class Database {

	private MongoClient = require('mongodb').MongoClient;
	private uri;
    private client;
    private collectionName : string;
    private dbName : string = "csTesting";

    constructor(collectionName) {
	let secrets;
	let password;
	if (!process.env.PASSWORD) {
	secrets = require('./secrets.json');
	password = secrets.password;
	} else {
		password = process.env.PASSWORD;
	}
	this.uri = password;
	this.collectionName = collectionName;
	this.client = new this.MongoClient(this.uri, { useNewUrlParser: true });
	// Open up a connection to the client.
	// Open up a connection to the client.
	// The connection is asynchronous, but we can't call await directly
	// in the constructor, which cannot be async. So, we use "IIFE". Explanation below.
	
	/* from https://anthonychu.ca/post/async-await-typescript-nodejs/

	  Async/Await and the Async IIFE

	  The await keyword can only be used inside of a function
	  marked with the async keyword. [...] One way to do this is
	  with an "async IIFE" (immediately invoked function
	  expression)...

	   (async () => {
	   // code goes here
	   })();
    */
    
	(async () => {
	    await this.client.connect().catch(err => { console.log(err); });
	})();
    }

    public async putTeam(key: string, pokemon1: number, pokemon2: number, pokemon3: number, pokemon4: number, pokemon5: number, pokemon6: number) : Promise<void> {
		let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        console.log("put: key = " + key + " pokemon1 = " + pokemon1 + " pokemon2 = " + pokemon2 + " pokemon3 = " + pokemon3 + " pokemon4 = " + pokemon4 + " pokemon5 = " + pokemon5 + " pokemon6 = " + pokemon6)
        let result = await collection.updateOne({'name' : key}, {$set: { 'pokemon1': pokemon1, 'pokemon2': pokemon2,  'pokemon3': pokemon3, 'pokemon4': pokemon4, 'pokemon5': pokemon5, 'pokemon6': pokemon6}}, { 'upsert' : true } );
	}
	
	
    public async getTeam(key: string) : Promise<string> {
		let db = this.client.db(this.dbName); // this.level(this.dbFile);
		let collection = db.collection(this.collectionName);
		console.log("get: key = " + key);
		let result = await collection.findOne({'name' : key });
		console.log("get: returned " + JSON.stringify(result));
		if (result != null) {
			return result;
		} else {
			return null;
		}
	}

	public async del(key: string) : Promise<void> {
        let db = this.client.db(this.dbName);
        let collection = db.collection(this.collectionName);
        console.log("delete: key = " + key);
        let result = await collection.deleteOne({'name' : key });
        // await this.db.del(key);
    }

    public async isFound(key: string) : Promise<boolean>  {
		let v = await this.getTeam(key);
		if (v === null) {
			return false;
		} else {
			return true;
		}
	}
}