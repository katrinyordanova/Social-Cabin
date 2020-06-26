const models = require('../models');

module.exports = {
    get: {
        many: (req, res, next) => {
                models.post.find().populate('author')
                .then((posts) => res.send(posts)
            ).catch(next);
        },
        myPosts: (req, res, next) => {
            const username = req.params.id;

            models.user.findOne({ username: username })
            .then((user) => { 
                models.post.find({ author: user._id })
                .then((posts) => res.send(posts));
            })
        },
        one: (req, res, next) => {
            const id = req.params.id;
            
            models.post.findById(id)
            .then((post) => res.send(post))
            .catch(next);
        }
    },
    post: (req, res, next)  => {
        const { title, description, username } = req.body;
        models.user.findOne({ username: username }).then((user) => {
            models.post.create({ title, description, author: user._id })
                .then((createdPost) => {
                    return Promise.all([
                        models.user.updateOne({ _id: user._id }, { $push: { posts: createdPost }}),
                        models.post.findOne({ _id: createdPost._id })
                    ]);
                })
            .then(([ modifiedObject, postObject]) => {
                res.send(postObject);
            })
            .catch(next);
        })
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