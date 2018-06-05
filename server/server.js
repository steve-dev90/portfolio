const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const projects = require('./routes/projects')
const email = require('./routes/email')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/projects', projects)
server.use('/api/email', email)

module.exports = server
