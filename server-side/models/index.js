const user = require('./user');
const tokenBlacklist = require('./tokenBlacklist');
const post = require('./post');
const profile = require('./profile');
const likes = require('./likes');

module.exports = { 
    user,
    tokenBlacklist,
    post,
    profile,
    likes
};