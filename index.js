const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const passport = require('passport');
const jwtStrategy = require('./config/passport-jwt-strategy');
const dotenv = require('dotenv').config();
const port = process.env.PORT||8000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up on port ${port}`);
})