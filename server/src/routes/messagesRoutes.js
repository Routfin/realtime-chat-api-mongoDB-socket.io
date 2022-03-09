const router = require('express').Router();
const messagesController = require('../controller/messagesController');

const loginRequired = require('../middlewares/loginRequired');

router.post('/', loginRequired, messagesController.store);
router.get('/:conversationId', loginRequired, messagesController.index);

module.exports = router;
