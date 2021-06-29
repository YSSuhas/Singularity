const express = require('express');
const asyncHandler = require('express-async-handler');
const Question = require('../database/schemas/questionschema');
const User = require('../database/schemas/userschema');
const bodyParser = require('body-parser');
const { protect } = require('../middleware/authmw');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

//Ask a question
router.post(

    '/ask',
    protect,

    asyncHandler( async(req,res) => {

        const { statement } = req.body;

        const question = new Question({
            "statement" : statement,
            "user" : user
        });

        User.update({_id: user},{$push: {questions: question._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        await question.save();

        res.status(201);
        res.json({
            _id: question._id
        });

    })

)

//Display all questions
router.get(

    '/',

    asyncHandler( async(req,res) => {

        const question = await Question.find({}).populate('user');
        res.json(question);

    })

)

//Display one question
router.get(

    '/:id',

    asyncHandler( async(req,res) => {

        const question = await Question.findById(req.params.id).populate('user').populate({
            path: 'answers',
            populate: {
                path: 'useranswered',
                model: 'User'
            }
        });
        res.json(question);

    })

)

module.exports = router