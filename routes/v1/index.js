const express = require('express');
const router = express.Router();

//user
router.use('/user',require('./user'));

//tambula ticket 
router.use('/tambula',require('./tambula'));

module.exports=router;