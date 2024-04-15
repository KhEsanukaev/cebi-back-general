const { Router } = require('express')
const { doorhandlesController } = require('../controllers/doorhandles.controller')

const router = Router()

router.get('/doorhandle', doorhandlesController.getDoorhandles)
router.post('/doorhandle', doorhandlesController.addDoorhandles)
router.delete('/doorhandle', doorhandlesController.deleteDoorhandles)



module.exports = router