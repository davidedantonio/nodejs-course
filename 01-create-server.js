'use strict'

const http = require('http')
const ADDRESS = '127.0.0.1'
const PORT = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ sayHello: 'Hello, World!' }))
})

server.listen(PORT, ADDRESS, _ => console.log(`Server listen on ${ADDRESS}:${PORT}`))