const mongoose = require('mongoose');
const User = require('./userschema');
const Question = require('./questionschema');

const starquestionSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    },
    {
        timestamps: true
    }
)

const Starquestion = mongoose.model('Starquestion' , starquestionSchema);

module.exports = Starquestion