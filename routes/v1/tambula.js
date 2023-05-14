const express = require('express');
const passport = require('passport');
const tambulaController = require('../../controller/tambula_controller');
const router = express.Router();

//create tambula ticket
router.get('/create',passport.authenticate('jwt',{session:false}),tambulaController.create);

//view specific ticket
router.get('/:id',passport.authenticate('jwt',{session:false}),tambulaController.viewSpecificTicket);

//get all tickets
router.get('/',passport.authenticate('jwt',{session:false}),tambulaController.viewAll);

module.exports=router;