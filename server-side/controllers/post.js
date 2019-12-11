const models = require('../models');

module.exports = {
    get: (req, res, next) => {
            models.post.find().populate('author')
            .then((posts) => res.send(posts)
        ).catch;
    },
    post: (req, res, next)  => {
        const { title, description } = req.body;
        const { _id } = req.user;
        
        models.post.create({ title, description, author: _id })
            .then((createdPost) => {
                return Promise.all([
                    models.user.updateOne({ _id }, { $push: { posts: createdPost }}),
                    models.post.findOne({ _id: createdPost._id })
                ]);
            })
            .then(([ modifiedObject, postObject]) => {
                res.send(postObject);
            })
            .catch(next);
    },
    put: (req, res, next) => {
        const { title, description } = req.body;
        const id = req.params.id;

        models.post.updateOne({ _id: id}, { title, description }).then((updatedPost) => {
            res.send(updatedPost)
        }).catch(error);
    },
    // delete: {

    // }
}