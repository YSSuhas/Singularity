const express = require('express');
const asyncHandler = require('express-async-handler');
const Question = require('../database/schemas/questionschema');
const User = require('../database/schemas/userschema');
const bodyParser = require('body-parser');
const { protect } = require('../middleware/authmw');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

//Display searched parameters
router.get(

    '/:text',

    asyncHandler( async(req,res) => {

        const questions = await Question.find({ "statement" : {$regex:`.*${req.params.text}.*`} }).populate('user').limit(5);
        const users = await User.find({ "username" : {$regex:`.*${req.params.text}.*`} }, 'username profilepic' ).limit(5);

        res.json({
            questions,
            users
        });

    })

)

module.exports = router