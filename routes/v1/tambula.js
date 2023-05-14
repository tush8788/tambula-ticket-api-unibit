const express = require('express');
const passport = require('passport');
const tambulaController = require('../../controller/tambula_controller');
const router = express.Router();

router.get('/create',passport.authenticate(
    'jwt',
    {session:false}
),tambulaController.create);

module.exports=router;