const express = require('express')
const Router = require('../router')

class Server {
  constructor(port) {
    this.port = port
    this.app = express()
  }
  start() {
    this._listen()
    this._setupRoutes()
  }
  _setupRoutes() {
    Router.create(this.app)

    // this.app.get('/', (req, res) => {
    //   res.send('Hello World !')
    // })
    // this.app.get('/product', (req, res) => {
    //   res.send('Product Page')
    // })
  }
  _listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}!`)
    })
  }
}

module.exports = Server
