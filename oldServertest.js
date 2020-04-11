const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express;

'use strict';
let http = require('http');
let url = require('url');
let fs = require('fs');
let util = require('util');
let level = require('level');


// connection string.
const uri = "mongodb+srv://Jeenil:1234@cs326finalproject-xfsi3.mongodb.net/test?retryWrites=true&w=majority'"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("cs326").collection("Pokemon");

   collection.find({id:Pokemon}).toArray((err, data) =>
   {
  if (err) {
      console.log(err);
  }
  return data;
  });
   
   // perform actions on the collection object
   //client.close();
});




server = http.createServer();
server.on ('request', async (request, response) => {
mongoDBCLinet = MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("cs326").collection("Pokemon");

   
   collection.find({id:10}).toArray((err, data) =>
         {
            if (err) {
                        console.log(err);
                    }
               response.write(JSON.stringify(data))
                  //console.log(data);
                  response.end();
               });
   });
});


