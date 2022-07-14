var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var router=require(__dirname + "/router/book.js")

mongoose.connect("mongodb://127.0.0.1:27017/bookstore", (error) => {
    console.log(error ? error : "connected with the database..");
})


var app = express();

app.listen(5000, () => {
    console.log("server is running...")
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/css"))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.use('/home', router);
app.use((error, req, res, next) => {
    res.send(error);
});
