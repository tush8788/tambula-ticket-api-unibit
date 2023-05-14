const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    ticket:{
        type:[Array],
        required:true
    }
},{
    timestamps:true
});

const Ticket = mongoose.model("Ticket",ticketSchema);

module.exports=Ticket;