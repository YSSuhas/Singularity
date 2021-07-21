const mongoose = require('mongoose');
const User = require('./userschema');
const Starquestion = require('./starquestionschema');
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
            ref: 'Starquestion'
        }]
    },
    {
        timestamps: true
    }
)

const Question = mongoose.model('Question' , questionSchema);

module.exports = Question