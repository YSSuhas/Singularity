const mongoose = require('mongoose');
const User = require('./userschema');
const Comment = require('./commentschema');

const postSchema = mongoose.Schema(
    {
        subject: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        useruploaded: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post' , postSchema);

module.exports = Post