const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../database/schemas/userschema');
const gettoken = require('../jwtokens/gettoken');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post(

    '/register',

    asyncHandler( async(req,res) => {

        const { mailid , password , username } = req.body;
        
        const mailidExists = await User.findOne( { mailid } );
        const usernameExists = await User.findOne( { username } ); 

        if(mailidExists) {
            res.status(400);
            throw new Error("User with this mail id already exists")
        }
        
        if(usernameExists) {
            res.status(400);
            throw new Error("Username already exists");
        }

        const user = new User({
            "mailid": mailid,
            "password": password,
            "username": username
        });
        await user.save();

        if(user) {
            res.status(201).json({
                _id: user._id,
                mailid: user.mailid,
                password: user.password,
                token: gettoken(user._id)
            })
        }

        else {
            res.status(400);
            throw new Error("Invalid user");
        }

    } )
)

module.exports = router;