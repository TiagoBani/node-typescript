import * as express from 'express'
import * as bodyParser from 'body-parser'

import { serverRoutes } from './app/config/server-routes';
class App {
  public express: any
  public bodyParser: any

  constructor () {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    
    this.mountRoutes()
  }
  
  private mountRoutes (): void {
    const router = express.Router()    
    const routes = new serverRoutes(this.express, router);
  }
}

export default new App().express
