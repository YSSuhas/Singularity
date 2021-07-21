const mongoose = require('mongoose');
const User = require('./userschema');
const pusher = require('../../pusher/pusher');
const asyncHandler = require('express-async-handler');

const chatSchema = new mongoose.Schema(
    {
        usera: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        userb: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        chats: [{
            from: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            to: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            message: {
                type: String,
                required: true
            },
            time: {
                type: Date,
                default: Date.now
            }
        }]
    },
    {
        timestamps: true
    }
)

const Chat = mongoose.model( 'Chat' , chatSchema );

const chatChange = Chat.watch();

chatChange.on("change" , 

    asyncHandler( async(change) => {
    
    console.log("A change ",change);

    if(change.operationType==='update') {
    
        const changeDoc = change.updateDescription.updatedFields;

        const chatis = await Chat.findById(change.documentKey._id);
        
        const len = chatis.chats.length-1;

        const updatemessage = changeDoc;
        var msg;
        
        if(len==0) {
            msg = updatemessage["chats"];
        }

        else {
            msg = updatemessage["chats."+len];
        }
         
        console.log(msg);

        pusher.trigger( 'singularitychats' , 'updated' ,
            {
                msg
            }
        )

    }

}))

module.exports = Chat