const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

router.get('/',controller.getAll);

router.get('/:chapa',controller.getTypeByChapa);

router.post('/',controller.create);


module.exports = router;