const express = require('express');
const asyncHandler = require('express-async-handler');
const Answer = require('../database/schemas/answerschema');
const Question = require('../database/schemas/questionschema');
const Comment = require('../database/schemas/commentschema');
const Blog = require('../database/schemas/blogschema');
const User = require('../database/schemas/userschema');
const Star = require('../database/schemas/starschema');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post(

    '/',

    asyncHandler ( async(req,res) => {

        const { user , question , answer , blog , comment } = req.body;

        if(question!="undefined") {

            const star = new Star({
                "user": user,
                "question": question
            })

            Question.update({_id: question},{$push: {stars: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            User.update({_id: user},{$push: {starredquestions: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            await star.save();

            res.status(201);
            res.json({
                _id: star._id
            });

        }

        else if(answer!="undefined") {

            const star = new Star({
                "user": user,
                "answer": answer
            })

            Answer.update({_id: answer},{$push: {stars: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            User.update({_id: user},{$push: {starredanswers: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            await star.save();

            res.status(201);
            res.json({
                _id: star._id
            });

        }

        else if(blog!="undefined") {

            const star = new Star({
                "user": user,
                "blog": blog
            })

            Blog.update({_id: blog},{$push: {stars: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            User.update({_id: user},{$push: {starredblogs: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            await star.save();

            res.status(201);
            res.json({
                _id: star._id
            });

        }

        else if(comment!="undefined") {

            const star = new Star({
                "user": user,
                "comment": comment
            })

            Comment.update({_id: comment},{$push: {stars: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            User.update({_id: user},{$push: {starredcomments: star._id }},{upsert:true},function(err){
                if(err){
                        console.log(err);
                }else{
                        console.log("Successfully added");
                }
            });

            await star.save();

            res.status(201);
            res.json({
                _id: star._id
            });

        }

    })

)

router.get(

    '/',

    asyncHandler( async(req,res) => {

        const { user , question , answer , blog , comment } = req.query;
        console.log("U "+ user);

        if(question!="undefined") {

            const starred = await Star.find({ 'user': user , 'question': question }).exec();
            
            res.json(starred);

        }

        else if(answer!="undefined") {

            const starred = await Star.find({ "user": user , "answer": answer });
            
            res.json(starred);

        }

        else if(blog!="undefined") {

            const starred = await Star.findOne({ "user": user , "blog": blog });
            
            res.json(starred);

        }

        else if(comment!="undefined") {

            const starred = await Star.findOne({ "user": user , "comment": comment });
            
            res.json(starred);

        }

    })

)

router.delete(

    '/',

    

)

module.exports = router;