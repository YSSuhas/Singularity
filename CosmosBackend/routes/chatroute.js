const express = require('express');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');
const Chat = require('../database/schemas/chatschema');
const { protect } = require('../middleware/authmw');
const User = require('../database/schemas/userschema');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post(

    '/',
    protect,

    asyncHandler( async( req , res ) => {

        const { chatwith , from , to , message } = req.body;

        const chata = await Chat.findOne({ 'usera': req.user , 'userb': chatwith });
        const chatb = await Chat.findOne({ 'usera': chatwith , 'userb': req.user });

        const messageinfo = {
            from: from,
            to: to,
            message: message
        }

        if( chata!=null || chatb!=null ) {

            if(chata!=null) {

                Chat.update({_id: chata._id},{$push: {chats: messageinfo }},{upsert:true},function(err){
                    if(err){
                            console.log(err);
                    }else{
                            console.log("Successfully added");
                    }
                });

                res.status(201).json({
                    chat: chata._id
                })
            }

            if(chatb!=null) {

                Chat.update({_id: chatb._id},{$push: {chats: messageinfo }},{upsert:true},function(err){
                    if(err){
                            console.log(err);
                    }else{
                            console.log("Successfully added");
                    }
                });

                res.status(201).json({
                    chat: chatb._id
                })

            }

        }

        else {

            const newchat = new Chat({
                "usera": req.user,
                "userb": chatwith
            })

            await newchat.save();

            Chat.update({_id: newchat._id},{$push: {chats: messageinfo }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            User.update({_id: req.user},{$push: {chats: newchat._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });
            
            User.update({_id: chatwith},{$push: {chats: newchat._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            res.json({
                chat: newchat._id
            })

        }

    } )

)

router.get(

    '/:id',
    protect,

    asyncHandler( async(req,res) => {

        const otheruser = req.params.id;

        const chata = await Chat.findOne( { 'usera' : req.user , 'userb' : otheruser } );
        const chatb = await Chat.findOne( { 'usera' : otheruser , 'userb' : req.user } );

        if(chata!=null) {

            res.json({
                chat: chata
            })

        }

        else if(chatb!=null) {

            res.json({
                chat: chatb
            })

        }

        else {

            res.json({
                chat: {
                    chats: [{}]
                }
            })

        }

    } )

)

module.exports = router;