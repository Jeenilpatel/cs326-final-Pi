var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');

const mongo = require('mongodb');

var mongURL = 'mongodb+srv://Jeenil:1234@cs326finalproject-xfsi3.mongodb.net/test?retryWrites=true&w=majority';

const clinet = new mongo.MongoClient(mongURL);

const databaseName = 'cs326';

const collectionName = 'Pokemon';

clinet.connect( function(err, db) {
    var db = mongoclient.db(databaseName);
    var pokemonCollection = db.collection(collectionName)
    collection.find()

    

    });

