const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controllers/saldosController');
const Authentication = require('./../middleware/Authentication');

router.use(cors());

/** obtener todos */
router.get('/', [Authentication],controller.getAll);
/** delete todos residenciales */
router.delete('/', [Authentication],controller.deleteAll);

/** agregar tiempo de estancionamiento a residentes o no residentes*/
router.put('/:placa', [Authentication],controller.addTime);

/** comienza mes */
router.post('/monthBegins', [Authentication], controller.monthBegins);

/** genero el pago de residenciales */
router.get('/payment/:filename', [Authentication],controller.residentialPayment);


module.exports = router;