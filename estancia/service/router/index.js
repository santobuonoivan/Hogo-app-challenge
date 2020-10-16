const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

router.get('/',controller.getAll);

router.delete('/deleteOficialEstancia',controller.deleteOficialEstancia);

router.post('/entry',controller.entry);

router.put('/exit',controller.exit);


module.exports = router;