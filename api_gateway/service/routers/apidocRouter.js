const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controllers/apidocController');

router.use(cors());

router.get('/', controller.apidoc);

module.exports = router;