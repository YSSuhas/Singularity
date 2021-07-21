const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../database/schemas/userschema');
const Starquestion = require('../database/schemas/starquestionschema');
const Staranswer = require('../database/schemas/staranswerschema');
const Question = require('../database/schemas/questionschema');
const Answer = require('../database/schemas/answerschema');

dotenv.config();

module.exports.protect = asyncHandler( async(req,res,next) => {

    let token;

    if(req.headers.authorization) {

        try {

            token = req.headers.authorization;
            var decode = jwt.verify( token , process.env.JWT_Private_Key );
            req.user = decode.id;
            console.log("U " +req.user);
            next();

        } catch (error) {
            
            throw new Error("User not Authenticated");

        }

    }

} )

module.exports.isstarqauthor = asyncHandler( async(req,res,next) => {

    const question = req.params.id;

    if(req.user) {
        
        const starquestion = await Starquestion.findOne({ "user": req.user , "question": question });
        req.starquestion = starquestion._id;
        req.question = question;
        next();

    }

})

module.exports.isquestionauthor = asyncHandler( async(req,res,next) => {

    const question = req.params.id;

    if(req.user) {

        const questionis = await Question.findById(question);

        if(req.user == questionis.user) {
        
            req.question = questionis._id;
            next();
        
        }

        else {
            throw new Error("Not authorized");
        }

    }

    else {
        throw new Error("User not found");
    }

})

module.exports.isstaraauthor = asyncHandler( async(req,res,next) => {

    const answer = req.params.id;
    if(req.user) {
        
        const staranswer = await Staranswer.findOne({ "user": req.user , "answer": answer });
        req.staranswer = staranswer._id;
        req.answer = answer;
        next();

    }
    
})

module.exports.isanswerauthor = asyncHandler( async(req,res,next) => {

    const answer = req.params.id;
    console.log("Aid "+answer);

    if(req.user) {
    
        const answeris = await Answer.findById(answer);

        if(req.user == answeris.useranswered) {

            req.answer = answeris._id;
            req.question = answeris.question;
            next();

        }

        else {
            throw new Error("Not authorized");
        }
    
    }

    else {
        throw new Error("user not found");
    }

})