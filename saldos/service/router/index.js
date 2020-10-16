const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

/** obtener importe de no residenciales */
router.get('/',controller.getImporte);

/** agregar tiempo de estancionamiento a residentes o no residentes*/
router.put('/:placa',controller.addTime);

/** comienza mes */
router.post('/monthBegins', controller.monthBegins);

/** genero el pago de residenciales */
router.post('/payment',controller.residentialPayment);


module.exports = router;