const mongoose = require('mongoose');
const User = require('./userschema');
const Blog = require('./blogschema');
//const Star = require('./starquestionschema');

const commentSchema = mongoose.Schema(
    {
        blog: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
            required: true
        },
        usercommented: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String,
            required: true
        }
        /*stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Star'
        }]*/
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment' , commentSchema);

module.exports = Comment