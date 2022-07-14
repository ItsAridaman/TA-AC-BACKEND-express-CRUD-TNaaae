var express = require('express');
const mybook = require('../models/mybook.js');
var router = express.Router();
var Mybook = require("../models/mybook.js")



router.get('/', (req, res) => {
    res.render('bookhome.ejs')
});

router.get('/add', (req, res) => {
    res.render('bookadd.ejs')
});

router.post('/add', (req, res, next) => {
    Mybook.create(req.body, (error, product) => {
        console.log(error);
        res.redirect('/home');
    })
});

router.get('/booklist', (req, res) => {

    Mybook.find({}, (err, books) => {

        res.render('booklist.ejs', {books:books})
    });
});

router.get('/bookdetails/:id', (req, res) => {
    var id = req.params.id;
    Mybook.findById(id, (err, books) => {
        console.log(books);
        res.render('bookdetails.ejs', { books: books })
    });

});

router.get('/bookedit/:id', (req, res) => {
    {
        var id = req.params.id;
        Mybook.findById(id, res.body, { new: true }, (err, book) => {
            console.log(book);
            res.render('bookedit.ejs', { book: book });
        })
    }
});

router.post('/bookedit/:id', (req, res) => {
    {
        var id = req.params.id;
        Mybook.findByIdAndUpdate(id, req.body, { new: true }, (err, book) => {
            console.log(book);
            res.redirect('/home/bookedit/' + id);
        })
    }
});

router.get('/bookdelete/:id', (req, res) => {
    {
        var id = req.params.id;
        Mybook.findByIdAndDelete(id, req.body, (err, book) => {

            res.redirect('/home/booklist');
        })
    }
});

module.exports = router;