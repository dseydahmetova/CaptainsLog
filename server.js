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
app.use(express.static('public'))

const captainRoutes = require('./routes/captainRoutes')
const foodLogRoutes = require('./routes/foodLogRoutes')


app.use('/logs', captainRoutes)
app.use('/foodlogs', foodLogRoutes)
app.use('/', (req, res) => {
    res.send(`<h1>Welcome to Captain's Log<br><br><a href="/logs">Continue</a></h1>`)
}
)

app.listen(PORT, ()=>{
    console.log('Listening port 8080')
})