var tambola = require('tambola-generator').default;
const TicketDB = require('../models/ticket');

//create ticket
module.exports.create = async function (req, res) {
    try {
        //get ticket count form query
        let TicketCount = req.query.count || 1;

        //convet string into mnumber
        TicketCount = parseInt(TicketCount);

        //genrate tambula ticket 
        let tickets = tambola.generateTickets(TicketCount);
        //create array to store ids of tickets
        let idArray = [];

        //retrive every ticket
        for (let i = 0; i < tickets.length; i++) {
            
            //create new ticket entry in DB
            let temp = await TicketDB.create({
                user: req.user.id,
                ticket: tickets[i]._entries
            })

            //store id in idArray
            idArray.push(temp._id);
        }

        //return res
        return res.status(200).json({
            message: "Tambula tickit",
            ticket: idArray
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

//view specific ticket
module.exports.viewSpecificTicket=async function(req,res){
    try{
        // console.log(req.params);
        //id find in DB
        let tambulaTicket =await TicketDB.findById(req.params.id);
        
        //if ticket not found and ticket user not match 
        if(!tambulaTicket || tambulaTicket.user!=req.user.id){
            return res.status(400).json({
                message:"Unauthorize to Access or id not found in DB"
            })
        }
        //return res
        return res.status(200).json({
            message:"Tambula Ticket",
            tambulaTicket
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

//view all tickets
module.exports.viewAll=async function(req,res){
    try{
        //get page number and limit to show entrises on DB
        let page=parseInt(req.query.page||0);
        let limit=parseInt(req.query.limit||0);
        
        //find all entrise
        let TambulaTickets = await TicketDB.find({user:req.user.id}).skip((page-1)*limit).limit(limit);
        
        //return res
        return res.status(200).json({
            message:"All Data",
            TambulaTickets
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}

//delete ticket
module.exports.deleteTicket = async function(req,res){
    try{
        //find ticket in DB
        let ticket = await TicketDB.findById(req.params.id);
        
        //if ticket is not found or req user not match
        if(!ticket || ticket.user != req.user.id){
            return res.status(400).json({
                message:"Ticket not Found or User not match"
            })
        }

        //delete ticket
        await ticket.deleteOne();
        
        //return res
        return res.status(200).json({
            message:"delete ticket successfully"
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}