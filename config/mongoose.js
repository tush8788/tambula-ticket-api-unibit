const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URL||'mongodb://localhost/tumbula_api_unibit');

const db = mongoose.connection;

db.on('error',()=>{console.log("error in connect db")});

db.once('open',()=>{console.log("connect DB Successfully")});

module.exports=db;