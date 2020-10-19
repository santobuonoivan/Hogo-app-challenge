const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controllers/userController');
const Authentication = require('./../middleware/Authentication');

router.use(cors());

router.get('/', [Authentication],controller.getAll);

router.post('/', [Authentication],controller.registry);

router.post('/auth',controller.login);


module.exports = router;