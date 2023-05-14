const path = require('path')

//home page
module.exports.home = function(req,res){
    return res.sendFile(path.join(__dirname,"../views/home.html"));
}