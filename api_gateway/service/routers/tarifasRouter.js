const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('./../controllers/tarifaController');
const Authentication = require('./../middleware/Authentication');

router.use(cors());

router.get('/:type', [Authentication],controller.getTarifaByType);

router.post('/', [Authentication],controller.create);


module.exports = router;