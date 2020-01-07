
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')
const app = express()

//setting
app.set('port' , process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'ejs')

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//router
app.use('/api' , require('./router/index.js'))

// static 
app.use(express.static(path.join(__dirname,'public')))

app.use((req,res,next)=>{
    res.status(404).send('404 not found')
})

module.exports = app