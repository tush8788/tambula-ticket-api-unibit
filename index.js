const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
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