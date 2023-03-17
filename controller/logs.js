const Log = require('../model/CaptainModel')

module.exports.index = async (req, res) => {
    const logsData = await Log.find()
    res.render('logs/Index', { logs: logsData })
}

module.exports.show = async (req, res) => {
    const logsData = await Log.findById(req.params.id)
    res.render('logs/Show', { logs: logsData })
}

module.exports.new = (req, res) => {
    res.render('logs/New')
}

module.exports.create = async (req, res) => {
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Log.create(req.body)

    } catch (err) {
        console.log('error', err)
    }
    res.redirect('/logs')
}

module.exports.delete = async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id)
    } catch (err) {
        console.log(err)
    }
    res.redirect('/logs')
}

module.exports.edit = async (req, res) => {
    const logsData = await Log.findById(req.params.id)
    res.render('logs/Edit', { logs: logsData })
}

module.exports.update = async (req, res) => {
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
}