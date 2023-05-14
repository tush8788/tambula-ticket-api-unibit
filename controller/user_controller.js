const UserDB = require('../models/user');

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