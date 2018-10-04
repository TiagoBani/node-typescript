import { CompetitorRoute } from './route/competitor.route';
import * as express from 'express'
import * as bodyParser from 'body-parser'

import { HomeRoute } from './route/home.route';

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
    
    const homeRoute = new HomeRoute(this.express, router, '/')
    const competitorRoute = new CompetitorRoute(this.express, router, 'competitors')
  }
}

export default new App().express
