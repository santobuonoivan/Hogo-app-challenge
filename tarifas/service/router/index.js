const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

router.get('/:type',controller.getTarifaByType);

router.post('/',controller.create);


module.exports = router;