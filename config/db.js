var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/lab3');
 
module.exports = connection;