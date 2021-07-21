const express = require('express');
const asyncHandler = require('express-async-handler');
const Answer = require('../database/schemas/answerschema');
const Question = require('../database/schemas/questionschema');
const Comment = require('../database/schemas/commentschema');
const Blog = require('../database/schemas/blogschema');
const User = require('../database/schemas/userschema');
const Starquestion = require('../database/schemas/starquestionschema');
const bodyParser = require('body-parser');
const { protect, isstarqauthor , isstaraauthor } = require('../middleware/authmw');
const Staranswer = require('../database/schemas/staranswerschema');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post(

    '/questions',
    protect,

    asyncHandler ( async(req,res) => {

        const { question } = req.body;

        const starquestionExists = await Starquestion.findOne( { "user": req.user , "question": question } );

        if(starquestionExists) {
            res.status(400);
            throw new Error("Already Starred");
        }

        const starquestion = new Starquestion({
            "user" : req.user,
            "question" : question
        });

        User.update({_id: req.user},{$push: {starredquestions: starquestion._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        Question.update({_id: question},{$push: {stars: starquestion._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        await starquestion.save();

        if(starquestion) {
            res.status(200);
            res.json({
                id : starquestion._id 
            })
        }

    })

)

router.get(

    '/questions/:id',
    protect,
    isstarqauthor,

    asyncHandler( async(req,res) => {

        const starquestion = await Starquestion.findById(req.starquestion);

        res.json({
            id: starquestion.user
        })

    })

)

router.delete(

    '/questions/:id',
    protect,
    isstarqauthor,

    asyncHandler( async(req,res) => {

        User.update({_id: req.user},{$pull: {starredquestions: req.starquestion }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        Question.update({_id: req.question},{$pull: {stars: req.starquestion }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        await Starquestion.findByIdAndDelete(req.starquestion);

        res.json({
            message: "Removed from starred questions"
        })

    })

)

router.post(

    '/answers',
    protect,

    asyncHandler ( async(req,res) => {

        const { answer } = req.body;

        const staranswerExists = await Staranswer.findOne( { "user": req.user , "answer": answer } );

        if(staranswerExists) {
            res.status(400);
            throw new Error("Already Starred");
        }

        const staranswer = new Staranswer({
            "user" : req.user,
            "answer" : answer
        });

        User.update({_id: req.user},{$push: {starredanswers: staranswer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        Answer.update({_id: answer},{$push: {stars: staranswer._id }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully added");
            }
        });

        await staranswer.save();

        if(staranswer) {
            res.status(200);
            res.json({
                id : staranswer._id,
                answerid: staranswer.answer
            })
        }

    })

)

router.get(

    '/answers/:id',
    protect,
    isstaraauthor,

    asyncHandler( async(req,res) => {

        const staranswer = await Staranswer.findById(req.staranswer);

        res.json({
            id: staranswer.user,
            answerid: staranswer.answer
        })

    })

)

router.delete(

    '/answers/:id',
    protect,
    isstaraauthor,

    asyncHandler( async(req,res) => {

        User.update({_id: req.user},{$pull: {starredanswers: req.staranswer }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        Answer.update({_id: req.answer},{$pull: {stars: req.staranswer }},{upsert:true},function(err){
            if(err){
                    console.log(err);
            }else{
                    console.log("Successfully deleted");
            }
        });

        await Staranswer.findByIdAndDelete(req.staranswer);

        res.json({
            message: "Removed from starred answers"
        })

    })

)

module.exports = router;