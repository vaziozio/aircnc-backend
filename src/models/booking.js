const mongoose = require('mongoose');

// declaring the 'spot' schema to be saved into the database
const spotSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('Booking', spotSchema);