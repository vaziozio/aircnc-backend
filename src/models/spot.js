const mongoose = require('mongoose');

// declaring the 'spot' schema to be saved into the database
const spotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('Spot', spotSchema);