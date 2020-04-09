const MongoClient = require('mongodb').MongoClient;

// connection string.
const uri = "mongodb+srv://Jeenil:1234@cs326finalproject-xfsi3.mongodb.net/test?retryWrites=true&w=majority'"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("cs326").collection("Pokemon");

   





   // perform actions on the collection object
   
});