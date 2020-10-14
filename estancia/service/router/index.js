const {Router} = require('express');
const router = Router();
const cors = require('cors');
const controller = require('../controller');
router.use(cors());

router.get('/',controller.getAll);

router.post('/',controller.entry);

router.put('/',controller.exit);


module.exports = router;