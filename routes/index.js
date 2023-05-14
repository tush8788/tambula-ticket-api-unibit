const express = require('express');
const homeController = require('../controller/home_controller');
const router = express.Router();

//home page
router.get('/',homeController.home);

//v1
router.use('/v1',require('./v1/index'));

module.exports=router;