const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Likes', likesSchema);