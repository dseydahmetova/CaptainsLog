require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db')

const PORT = 8080
connectDB()

const methodOverride = require('method-override')

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


const captainRoutes = require('./routes/captainRoutes')



app.use('/logs', captainRoutes)


app.listen(PORT, ()=>{
    console.log('Listening port 8080')
})