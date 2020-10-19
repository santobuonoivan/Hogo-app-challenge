const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('./../controllers/vehiculoController');
const Authentication = require('./../middleware/Authentication');

router.use(cors());

router.get('/', [Authentication],controller.getAll);

router.get('/:placa', [Authentication],controller.getTypeByChapa);

router.post('/', [Authentication],controller.create);


module.exports = router;