let mongoose = require('mongoose');

let User = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    token: String,

});

module.exports = mongoose.model('User',User);
