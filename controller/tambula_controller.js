var tambola = require('tambola-generator').default;

module.exports.create=function(req,res){

    //genrate tambula ticket 
    let ticket=tambola.generateTickets(1);
    
    return res.status(200).json({
        message:"Tambula tickit",
        ticket:ticket
    })
}