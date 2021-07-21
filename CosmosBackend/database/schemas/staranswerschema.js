const mongoose = require('mongoose');
const User = require('./userschema');
const Answer = require('./answerschema');

const staranswerSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        answer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        }
    },
    {
        timestamps: true
    }
)

const Staranswer = mongoose.model( 'Staranswer' , staranswerSchema );

module.exports = Staranswer