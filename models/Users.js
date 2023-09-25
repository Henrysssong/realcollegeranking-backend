const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    email: String,
    password: String,
    answers: Array
});

module.exports = mongoose.model('User', userSchema);
