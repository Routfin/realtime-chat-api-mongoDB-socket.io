const router = require('express').Router();
const conversationController = require('../controller/conversationController');

const loginRequired = require('../middlewares/loginRequired');

router.post('/', loginRequired, conversationController.store);
router.get('/:userId', loginRequired, conversationController.index);

module.exports = router;
