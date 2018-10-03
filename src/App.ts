import * as express from 'express'
import * as bodyParser from 'body-parser'

import { AppResponse } from './response/App-response';

class App {
  public express: any
  public bodyParser: any
  private response: any

  constructor () {
    this.express = express()
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    
    this.mountRoutes()
    this.response = new AppResponse()
  }

  private mountRoutes (): void {
    const router = express.Router()    
    router.all('/:name?', (req, res) => {
      res.json(this.response.responseJson(
          { Request:req, Response:res }, 
          req.method 
      ))
    })
    this.express.use('/', router)
  }
}

export default new App().express
