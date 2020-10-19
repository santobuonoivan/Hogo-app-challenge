const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

router.get('/',controller.getAll);

router.post('/',controller.registry);

router.post('/auth',controller.login);

module.exports = router;