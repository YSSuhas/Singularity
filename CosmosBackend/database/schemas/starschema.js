const mongoose = require('mongoose');
const User = require('./userschema');
const Question = require('./questionschema');
const Blog = require('./blogschema');
const Answer = require('./answerschema');
const Comment = require('./commentschema');

const starSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        },
        blog: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        },
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    },
    {
        timestamps: true
    }
)

const Star = mongoose.model('Star' , starSchema);

module.exports = Star