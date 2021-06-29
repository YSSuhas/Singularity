const mongoose = require('mongoose');
const User = require('./userschema');
const Star = require('./starschema');
const Answer = require('./answerschema');

const questionSchema = mongoose.Schema(
    {
        statement: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        answers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        }],
        stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Star'
        }]
    },
    {
        timestamps: true
    }
)

const Question = mongoose.model('Question' , questionSchema);

module.exports = Question