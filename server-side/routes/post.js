const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/all-posts', controllers.post.get);
router.post('/create-post', auth(), controllers.post.post);
router.put('/edit-post/:id', auth(), controllers.post.put);

module.exports = router;