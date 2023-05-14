
//create user
module.exports.create=async function(req,res){
    try{
        //password and confirm password not match
        if(req.body.password != req.body.confirmPassword){
            return res.status(400).josn({
                message:"Password and Confirm Password not match"
            })
        }
        //check user already exist in db
        // let user = await 
        
        
    }
    catch(err){
        console.log(err);
        return res.status(500).josn({
            message:"Internal Server Error"
        })
    }
}