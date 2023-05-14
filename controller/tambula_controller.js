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
