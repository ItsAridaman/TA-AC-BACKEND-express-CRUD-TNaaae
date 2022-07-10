var express = require('express');
var mongoose = require('mongoose');

var user = require(__dirname + "/models/user.js");

mongoose.connect("mongodb://127.0.0.1:27017/sample1", (error) => {
    console.log(error ? error : "connected to db");
})

var app = express();

app.listen('5000', () => {
    console.log("server is running");
})

app.use(express.json());

app.post('/new', (req, res, next) => {

    user.create(req.body, (err, user) => {
        console.log(err)
        res.json(user);
    })
});

app.get('/user/:id', (req, res) => {
    var id=req.params.id;
    user.findById(id, (err,user)=>
    {
        console.log(err)
        res.json(user);
    })
});

