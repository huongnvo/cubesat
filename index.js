/* Getting all packages -------------------------------------------------------------*/
var jwt = require("jsonwebtoken");
var morgan = require("morgan");
var config = require('./config');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var express = require("express");
var fs = require('fs');

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

/* Route middleware to verify a token -------------------------------------------------*/
function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
            if (err) {
                return res.json({ 
                    success: false, 
                    message: 'Failed to authenticate token.' 
                });    
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
};


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


