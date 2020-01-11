const express = require('express');
const sessionController = require('./controllers/SessionController');
const spotController = require('./controllers/SpotController');
const profileController = require('./controllers/ProfileController');
const bookingController = require('./controllers/BookingController');
const multer = require('multer');
const uploadConf = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConf);
routes.post("/sessions", sessionController.store);

routes.post("/spots", upload.single('thumbnail'), spotController.store);
routes.get("/spots", spotController.index);

routes.get('/profile', profileController.index);


routes.post('/spots/:id/booking', bookingController.store);
module.exports = routes 