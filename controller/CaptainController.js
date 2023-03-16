const Log = require('../model/CaptainModel')

module.exports.index = async (req, res) => {
    const logsData = await Log.find()
    res.render('Index', { logs: logsData })
}

module.exports.show = async (req, res) => {
    const logsData = await Log.findById(req.params.id)
    res.render('Show', { logs: logsData})
}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async(req, res) => {
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
        await Log.create(req.body)

    }catch(err){
        console.log('error', err)
    }
    res.redirect('/logs')
}