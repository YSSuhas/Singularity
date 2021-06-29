const mongoose = require('mongoose');
const User = require('./userschema');
const Question = require('./questionschema');
const Star = require('./starschema');

const answerSchema = mongoose.Schema(
    {
        solution: {
            type: String,
            required: true
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        useranswered: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Star'
        }]
    },
    {
        timestamps: true
    }
)

const Answer = mongoose.model('Answer' , answerSchema);

module.exports = Answer