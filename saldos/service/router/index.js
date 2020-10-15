const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

/** obtener importe de no residenciales */
router.get('/',controller.getImporte);

/** agregar nuevo cehiculo */
router.post('/',controller.create);

/** agregar tiempo de estancionamiento a residentes */
router.post('/',controller.addTime);

/** genero el pago de residenciales */
router.post('/',controller.residentialPayment);


module.exports = router;