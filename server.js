const express = require('express')
const server = express()
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
// const bicyclesRouter = require('')

server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)


server.get('/',(req,res)=>{
    res.send('Server Running')
})


module.exports = server