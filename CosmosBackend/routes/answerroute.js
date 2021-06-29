const express = require('express');
const asyncHandler = require('express-async-handler');
const Answer = require('../database/schemas/answerschema');
const Question = require('../database/schemas/questionschema');
const User = require('../database/schemas/userschema');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

//Answer a question
router.post(

    '/answer',

    asyncHandler( async(req,res) => {

        const { solution , useranswered , question } = req.body;

        const answer = new Answer({
            "solution": solution,
            "question": question,
            "useranswered": useranswered
        });

        await answer.save();

        res.status(201);

        Question.update({_id: question},{$push: {answers: answer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        User.update({_id: useranswered},{$push: {answers: answer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        res.json({
            _id: answer._id
        });

    })

)

module.exports = router