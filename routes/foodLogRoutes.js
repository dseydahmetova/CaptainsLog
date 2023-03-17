const express = require('express')

const router = express.Router()

const foodLogController = require('../controller/foodlogs')


// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

router.get('/', foodLogController.index)
router.post('/seed', foodLogController.seed)
router.get('/new', foodLogController.new)
router.delete('/:id', foodLogController.delete)
router.put('/:id', foodLogController.update)
router.post('/', foodLogController.create)
router.get('/:id/edit', foodLogController.edit)
router.get('/:id', foodLogController.show)


module.exports = router