const models = require('../models');

module.exports = {
    get: {
        many: (req, res, next) => {
                models.post.find().populate('author').populate('likes')
                .then((posts) => res.send(posts)
            ).catch(next);
        },
        one: (req, res, next) => {
            const id = req.params.id;
        
            models.post.findOne(id)
            .then((posts) => res.send(posts))
            .catch(next);
        }
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
        }).catch(next);
    },
    delete: (req, res, next) => {
        const { title, description } = req.body;
        const id = req.params.id;

        models.post.deleteOne({ _id: id }, { title, description })
        .then((deletedPost) => {
            res.send(deletedPost);
        }).catch(next);
    }
}