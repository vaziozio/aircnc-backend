const mongoose = require('mongoose');

// declaring the user schema to be saved into the database
const userSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', userSchema);