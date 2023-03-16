const express = require('express')
const router = express.Router()

const captainController = require('../controller/CaptainController')

router.get('/', captainController.index)
router.post('/', captainController.create)
router.get('/new', captainController.new)
router.delete('/:id', captainController.delete)
router.get('/:id', captainController.show)


module.exports = router
