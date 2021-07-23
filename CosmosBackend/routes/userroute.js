const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../database/schemas/userschema');
const gettoken = require('../jwtokens/gettoken');
const bodyParser = require('body-parser');
const sendmail = require('../mailjet/sendmail');
const { protect } = require('../middleware/authmw');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post(

    '/register',

    asyncHandler( async(req,res) => {

        const { mailid , password , username } = req.body;
        
        const mailidExists = await User.findOne( { mailid } );
        const usernameExists = await User.findOne( { 'username': username } ); 

        if(mailidExists) {
            res.status(400);
            throw new Error("User with this mail id already exists");
        }
        
        if(usernameExists) {
            res.status(400);
            throw new Error("Username already exists");
        }

        sendmail(mailid,username);

        const user = new User({
            "mailid": mailid,
            "password": password,
            "username": username
        });
        await user.save();

        if(user) {
            res.status(201).json({
                id: user._id,
                username: user.username,
                profilepic: user.profilepic,
                token: gettoken(user._id)
            })
        }

        else {
            res.status(400);
            throw new Error("Invalid user");
        }

    } )
)

router.post(

    '/login',

    asyncHandler( async ( req , res ) => {

        const { mailid , password } = req.body;
        const user = await User.findOne({ mailid });

        if( user && ( user.matchPassword( password ) ) ) {
            res.json({
                id: user._id,
                username: user.username,
                profilepic: user.profilepic,
                token: gettoken(user._id)
            })
        }

        else {
            res.status(401);
            throw new Error("Invalid User");
        }

    } )

)

router.get(

    '/:username',
    protect,

    asyncHandler( async ( req , res ) => {

        const user = await User.findOne({ 'username': req.params.username } , 'username profilepic mailid description questions answers starredquestions starredanswers createdAt updatedAt').populate('questions').populate({
            path: 'answers',
            populate: {
                path: 'question',
                populate: {
                    path: 'user',
                    select: 'username profilepic',
                    model: 'User'
                }
            }
        }).populate({
            path: 'starredquestions',
            populate: {
                path: 'question',
                populate: {
                    path: 'user',
                    select: 'username profilepic',
                    model: 'User'
                }
            }
        }).populate({
            path: 'starredanswers',
            populate: {
                path: 'answer',
                populate: {
                    path: 'question',
                    populate: {
                        path: 'user',
                        select: 'username profilepic',
                        model: 'User'
                    }
                }
            }
        });

        res.json(user);

    } )

)

//Get chats of user
router.get(

    '/:username/chats',
    protect,

    asyncHandler( async(req,res) => {

        //var sort = {};
        //sort['chats.updatedAt'] = -1;

        const user = await User.findById(req.user , 'chats').populate({
            path: 'chats',
            options: { sort: { updatedAt: -1 } }
        }).populate({
            path: 'chats',
            populate: {
                path: 'usera',
                select: 'username profilepic',
                model: 'User'
            }
        }).populate({
            path: 'chats',
            populate: {
                path: 'userb',
                select: 'username profilepic',
                model: 'User'
            }
        });

        res.json(user);

    } )

)

router.put(

    '/',
    protect,

    asyncHandler( async( req , res ) => {

        const { mailid , username , profilepic , description } = req.body;

        const user = await User.findById(req.user);

        if(user) {
        
            user.mailid = mailid || user.mailid;
            user.username = username || user.username;
            user.profilepic = profilepic || user.profilepic;
            user.description = description || user.description;

            const updateUser = await user.save();

            sendmail(updateUser.mailid,updateUser.username);

            res.json({
                id: updateUser._id,
                username: updateUser.username,
                profilepic: updatedUser.profilepic,
                token: gettoken(updateUser._id)
            })
        
        }

        else {

            res.status(401);
            throw new Error("User not found");
        
        }

    } )

)

module.exports = router;