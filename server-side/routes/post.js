const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/all-posts', controllers.post.get.many);
router.get('/my-posts/:id', controllers.post.get.myPosts);
router.get('/:id', controllers.post.get.one);
router.post('/create-post', controllers.post.post);
router.put('/edit-post/:id', controllers.post.put.update);
router.put('/like-post/:id', controllers.post.put.like);
router.delete('/delete-post/:id', controllers.post.delete);

module.exports = router;