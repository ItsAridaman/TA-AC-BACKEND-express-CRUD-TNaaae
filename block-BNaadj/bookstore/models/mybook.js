var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bookschema = new Schema(
    {
        Name: String,
        Description: String,
        Author: String
    }
);


module.exports = mongoose.model('Mybook', Bookschema);