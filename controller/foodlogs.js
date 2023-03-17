const FoodLog = require('../model/FoodLogModel')
const food = require('../model/FoodLog')

module.exports.index = async (req, res) => {
    const foodlogData = await FoodLog.find()
    res.render('foodlogs/Index', { foodlogs: foodlogData })
}

module.exports.new = (req, res) => {
    res.render('foodlogs/New')
}

module.exports.create = async (req, res) => {
    if (req.body.isHealthy) {
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }
    try {
        await FoodLog.create(req.body)
        res.redirect('/foodlogs')

    } catch (err) {
        console.log(err)
    }
}

module.exports.show = async (req, res) => {
    try {
        const foodlogData = await FoodLog.findById(req.params.id)
        res.render('foodlogs/Show', { foodlogs: foodlogData })
    } catch (err) {
        console.log(err)
    }
}

module.exports.delete = async (req, res) => {
    try {
        await FoodLog.findByIdAndDelete(req.params.id)
        res.redirect('/foodlogs')
    } catch (err) {
        console.log(err)
    }
}

module.exports.edit = async (req, res) => {
    try {
        const foodlogsData = await FoodLog.findById(req.params.id)
        res.render('foodlogs/Edit', { foodlogs: foodlogsData })
    } catch (err) {
        console.log(err)
    }
}

module.exports.update = async (req, res) => {
    if (req.body.isHealthy) {
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }
    try {
        await FoodLog.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/foodlogs/${req.params.id}`)

    } catch (err) {
        console.log(err)
    }
}

module.exports.seed = async (req, res) => {
    try{
        await FoodLog.deleteMany({})
        await FoodLog.create(food)
        res.redirect('/foodlogs')
    }catch(err){
        console.error()
    }
}