const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('./../controllers/vehiculoController');
router.use(cors());

router.get('/',controller.getAll);

router.get('/:placa',controller.getTypeByChapa);

router.post('/',controller.create);


module.exports = router;