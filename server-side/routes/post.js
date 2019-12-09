const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/all-posts', controllers.post.get.getAll);
router.post('/create-post', controllers.post.post.createPost);

module.exports = router;