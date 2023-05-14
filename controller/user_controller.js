const UserDB = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');

//create user
module.exports.create=async function(req,res){
    try{
        //password and confirm password not match
        if(req.body.password != req.body.confirmPassword){
            return res.status(400).json({
                message:"Password and Confirm Password not match"
            })
        }
        //check user already exist in db
        let user = await UserDB.findOne({email:req.body.email});

        //if user not found 
        if(!user){
            user = await UserDB.create(req.body);
            return res.status(200).json({
                message:"User Create Successfully"
            })
        }

        //if user already exist then just back
        return res.status(200).json({
            message:"User Already exist"
        })        
        
    }
    catch(err){
        let errorMessage,code;
        //fild missing error
        if(err.name=="ValidationError"){
            errorMessage="Missing email,password or confirmPassword",
            code=400
        }
        else{
            errorMessage="Internal Server Error"
            code=500;
        }

        // console.log(err.);
        return res.status(code).json({
            message:errorMessage
        })
    }
}

//create session 
module.exports.createSession= async function(req,res){
    try{
        //find user in DB
        let user =await UserDB.findOne({email:req.body.email});
        
        if(!user || req.body.password != user.password){
            return res.status(400).json({
                message:"email or password not match"
            })
        }

        return res.status(200).json({
            message:"Login Successfully",
            token:jsonwebtoken.sign(user.toJSON(),"ComplexKey@1234!",{expiresIn:10000*60*100})
        })

    }
    catch(err){
        let errorMessage,code;
        //fild missing error
        if(err.name=="ValidationError"){
            errorMessage="Missing email,password or confirmPassword",
            code=400
        }
        else{
            errorMessage="Internal Server Error"
            code=500;
        }

        // console.log(err.);
        return res.status(code).json({
            message:errorMessage
        })
    }
}