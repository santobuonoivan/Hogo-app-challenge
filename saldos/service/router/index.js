const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

/** obtener todos */
router.get('/',controller.getAll);
/** delete todos residenciales */
router.delete('/',controller.deleteAll);

/** agregar tiempo de estancionamiento a residentes o no residentes*/
router.put('/:placa',controller.addTime);

/** comienza mes */
router.post('/monthBegins', controller.monthBegins);

/** genero el pago de residenciales */
router.get('/payment/:filename',controller.residentialPayment);


module.exports = router;