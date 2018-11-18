const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/routes')

const server = express()

// Middleware

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('Public'))

// Routes

server.use('/', userRoutes)

module.exports = server
