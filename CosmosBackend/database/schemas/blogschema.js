const mongoose = require('mongoose');
const User = require('./userschema');
const Comment = require('./commentschema');
//const Star = require('./starquestionschema');

const blogSchema = mongoose.Schema(
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
        /*stars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Star'
        }],*/
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog' , blogSchema);

module.exports = Blog