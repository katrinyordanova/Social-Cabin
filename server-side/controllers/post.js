const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            models.post.find().then((posts) => { res.send(posts);});
        }
    },
    post: {
        createPost: (req, res, next)  => {
            const { title, description, image } = req.body;
            //console.log(req.user); undefined
            // console.log(req.user.id); error
            //console.log(req.user._id); error
            // const user = req.user;
            
            // models.post.create({ title, description, image, author: user.id })
            //     .then((createdPost) => {
            //         return Promise.all([
            //             models.user.updateOne({ _id }, { $push: { posts: createdPost }}),
            //             models.post.findOne({ _id: createdPost._id })
            //         ]);
            //     })
            //     .then(([ modifiedObject, postObject]) => {
            //         res.send(postObject);
            //     })
            //     .catch(next);
            models.post.create({ title, description, image }).then((createdPost) => { res.send(createdPost)});
        }
    },
    // put: {

    // },
    // delete: {

    // }
}