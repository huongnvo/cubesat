/* Getting all packages -------------------------------------------------------------*/
var jwt = require("jsonwebtoken");
var morgan = require("morgan");
var config = require('./config');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var express = require("express");
var fs = require('fs');
var tree = require('mongoose-treehuong');

/* Setting up the express app -------------------------------------------------------*/
var port = process.env.PORT || 3000;
var app = express();
app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.set("view options", {
    layout: false
});

// use morgan to log requests to the console
app.use(morgan("dev"));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Setting up the database connection ------------------------------------------------*/
mongoose.connect(config.database, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.set('superSecret', config.secret); // secret variable
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
});

/* Setting up the database for each subsystem -----------------------------------------*/
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/* Setting up the database for all users  ---------------------------------------------*/
var RequirementsFactory = require('./public/js/models/RequirementsFactory.js');
var requirementfactory = new RequirementsFactory(Schema, mongoose, tree);
requirementfactory.createSchemas();
var resp = requirementfactory.removeAll();
requirementfactory.insertPart();

app.get('/requirements', function(req, res) {
    var resp = requirementfactory.getAll({}, res);
});

app.get('/requirements/root.json', function(req, res) {
    var resp = requirementfactory.getRoot({}, res);
});

app.get('/requirements/:_id', function(req, res) {
    var resp = requirementfactory.getPartById(req, res);
});

app.post('/requirements', function(req, res) {
    var resp = requirementfactory.putPart(req, res);
});

app.put('/requirements', function(req, res) {
    var resp = requirementfactory.updatePart(req, res);
});

app.delete('/requirements/:_id', function(req, res) {
    var resp = requirementfactory.removePart(req, res);
});

/* Setting the routes and html file paths -----------------------------------------------*/
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('../public/tmpl/index.ejs', { title: 'CubeSat Requirements Management Tool' });
});

app.get('/home', function (req, res) {
    res.render('../public/tmpl/index.ejs', { title: 'CubeSat Requirements Management Tool' });
});


app.listen(port);
console.log('Express server running at port: ' + port);


