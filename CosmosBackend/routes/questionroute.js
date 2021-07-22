const express = require('express');
const asyncHandler = require('express-async-handler');
const Question = require('../database/schemas/questionschema');
const User = require('../database/schemas/userschema');
const bodyParser = require('body-parser');
const { protect , isquestionauthor } = require('../middleware/authmw');
const Starquestion = require('../database/schemas/starquestionschema');
const Answer = require('../database/schemas/answerschema');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

//Ask a question
router.post(

    '/ask',
    protect,

    asyncHandler( async(req,res) => {

        const { statement } = req.body;

        console.log(statement);

        const question = new Question({
            "statement" : statement,
            "user" : req.user
        });

        User.update({_id: req.user},{$push: {questions: question._id }},{upsert:true},function(err){
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

        const { sortfor , type } = req.query;

        var sort = {};
        sort[sortfor] = type;

        const question = await Question.find({}).populate('user' , 'username profilepic').sort(sort);
        res.json(question);

    })

)

//Display one question
router.get(

    '/:id',

    asyncHandler( async(req,res) => {

        const question = await Question.findById(req.params.id).populate('user' , 'username profilepic').populate({
            path: 'answers',
            populate: {
                path: 'useranswered',
                select: 'username profilepic',
                model: 'User'
            }
        });
        res.json(question);

    })

)

router.delete(

    '/:id',
    protect,
    isquestionauthor,

    asyncHandler( async(req,res) => {

        User.update({_id: req.user},{$pull: {questions: req.question }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        await Question.findByIdAndDelete(req.question);

        res.json({
            message: "Deleted the question"
        })

    })

)

//Display some questions
router.get(

    '/search/:text',

    asyncHandler( async(req,res) => {

        const question = await Question.find({ "statement" : {$regex:`.*${req.params.text}.*`} }).populate('user');
        res.json(question);

    })

)

module.exports = router