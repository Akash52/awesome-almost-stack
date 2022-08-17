const express = require('express')

class Router {
  constructor() {
    this.router = express.Router()
  }
  create(app) {
    //TODO attach meddleware
    //TODO attach routes
    //TODO handel 404 pages
    //TODO handle exceptions
    //TODO register router

    app.use(this.router)
  }
}

module.exports = new Router()
