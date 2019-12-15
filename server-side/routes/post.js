const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/all-posts', controllers.post.get.many);
router.get('/:id', controllers.post.get.one);
router.post('/create-post', auth(), controllers.post.post);
router.put('/edit-post/:id', auth(), controllers.post.put);
router.delete('/delete-post/:id', auth(), controllers.post.delete);

module.exports = router;