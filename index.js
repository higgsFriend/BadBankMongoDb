var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// Serve static files
app.use(express.static('public'));
app.use(cors());

// Route for create account
app.get('/account/create/:name/:email/:password', function(req,res) {
    // res.send({
    //     name: req.params.name,
    //     email: req.params.email,
    //     password: req.params.password
    // });
    dal.create(req.params.name, req.params.email, req.params.password).
    then((user) => {
        console.log(user);
        res.send(user);
    });

});

// Route for login
app.get('/account/login/:email/:password', function(req,res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

// Route for All accounts
app.get('/account/all', function(req,res) {
    // res.send({
    //     name: 'peter',
    //     email: 'peter@mit.edu',
    //     password: 'secret'
    // });
    dal.all().
    then((docs) => {
        console.log(docs);
        res.send(docs);
    })
});

// Route for deposit
app.get('/deposit/:amount', function(req,res) {
    res.send({
        amount: req.params.amount,
        reply: 'Thanks for your cash dude.'
    });
});

// Route for withdraw
app.get('/withdraw/:amount', function(req,res) {
    res.send({
        amount: req.params.amount,
        reply: 'We\'ll think about it.'
    });
});

var port = 3000;
app.listen(port, ()=> console.log('Running on port:' + port ));



