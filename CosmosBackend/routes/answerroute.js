const express = require('express');
const asyncHandler = require('express-async-handler');
const Answer = require('../database/schemas/answerschema');
const Question = require('../database/schemas/questionschema');
const User = require('../database/schemas/userschema');
const bodyParser = require('body-parser');
const { protect, isanswerauthor } = require('../middleware/authmw');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

//Answer a question
router.post(

    '/',
    protect,

    asyncHandler( async(req,res) => {

        const { solution , questionid } = req.body;

        const answer = new Answer({
            "solution": solution,
            "question": questionid,
            "useranswered": req.user
        });

        Question.update({_id: questionid},{$push: {answers: answer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        User.update({_id: req.user},{$push: {answers: answer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        await answer.save();

        res.status(201);
        res.json({
            _id: answer._id
        });

    })

)

router.delete(

    '/:id',
    protect,
    isanswerauthor,

    asyncHandler( async(req,res) => {

        User.update({_id: req.user},{$pull: {answers: req.answer }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        Question.update({_id: req.question},{$pull: {answers: req.answer }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        await Answer.findByIdAndDelete(req.answer);

        res.json({
            message: "Answer deleted successfully"
        })

    })

)

module.exports = router