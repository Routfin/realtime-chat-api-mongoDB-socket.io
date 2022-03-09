const router = require('express').Router();
const userController = require('../controller/userController');

const loginRequired = require('../middlewares/loginRequired');

router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);
router.get('/', loginRequired, userController.index);

module.exports = router;
