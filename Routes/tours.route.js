const express = require('express');
router = express.Router();
const toursController = require('../Controller/tours.controller.js');





router.route("/").post(toursController.createTour);


module.exports = router;