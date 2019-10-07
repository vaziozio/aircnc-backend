const express = require("express");
const sessionController = require('./controllers/sessioncontroller');
const multer = require('multer');
const uploadCongif = require('./config/upload');

const spotController = require('./controllers/spotcontroller');

const profileController = require('./controllers/profilecontroller');

const bookingController = require('./controllers/bookingcontroller');

const routes = express.Router();
const upload = multer(uploadCongif);
// define the main route of the app
// app.get('route', (requisition, response))
// json = javascript object notation

routes.get('/', (req, res) => {
    return res.json({
        message: 'Hello world'
    });
})

// use req.query to access the query parameters 
// app.put('/users/:id', (req, res) to edit user by id
// req.params to access and edit user
// req.body to access the requisition body

routes.post('/sessions', sessionController.store);

routes.post('/spots', upload.single('thumbnail'), spotController.store);
routes.get('/spots', spotController.index);

routes.get('/profile', profileController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;