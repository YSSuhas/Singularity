const mongoose = require('mongoose');
const User = require('./userschema');
const Post = require('./postschema');

const commentSchema = mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        },
        useruploaded: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        usercommented: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String,
            required: true
        },
        stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment' , commentSchema);

module.exports = Comment