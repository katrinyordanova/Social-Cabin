const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    author: [{ type: mongoose.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Post', postSchema);