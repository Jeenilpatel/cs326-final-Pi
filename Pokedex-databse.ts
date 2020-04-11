export class Database {

    private MongoClient = require('mongodb').MongoClient;
    private dbURL: string;
    private db: any;

    /*
    This function should initialize the leveldb database using the provided filename
    Remember that the level module, dbfile and db variables are all PRIVATE so you must access them using this
    */
    constructor(url: string) {
        // Your code here
        this.dbURL = url;
        var self = this;
        this.MongoClient.connect(this.dbURL, function (err, client) {
            if (err) {
                console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
            }
            //console.log('Connected...');
            self.db = client.db("cs326").collection("Pokemon");
        }
        )
    };

    public async findPokemonByID(id: number) {
        await this.db.find({ id: id }).toArray((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
            return data;
        });
    }
    
}
