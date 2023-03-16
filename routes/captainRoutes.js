const express = require('express')
const router = express.Router()

const captainController = require('../controller/CaptainController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show
router.get('/', captainController.index)
router.post('/', captainController.create)
router.get('/new', captainController.new)
router.delete('/:id', captainController.delete)
router.put('/:id', captainController.update)
router.get('/:id', captainController.show)
router.get('/:id/edit', captainController.edit)



module.exports = router
