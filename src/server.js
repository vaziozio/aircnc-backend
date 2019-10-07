// import lib express, routes and mongoose
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

// call lib express as const
const app = express();

// connect to database
mongoose.connect('mongodb+srv://aircnc:aircnc@aircncdb-rfh41.mongodb.net/aircncdata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// inform the requisition type for express
app.use(express.json());
app.use(routes);


// define the port to serve the app
app.listen(3333);