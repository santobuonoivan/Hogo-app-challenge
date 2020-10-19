const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controllers/estanciaController');
const Authentication = require('./../middleware/Authentication');
router.use(cors());

router.get('/', [Authentication],controller.getAll);

router.delete('/deleteOficialEstancia', [Authentication], controller.deleteOficialEstancia);

router.post('/entry', [Authentication],controller.entry);

router.put('/exit', [Authentication],controller.exit);


module.exports = router;