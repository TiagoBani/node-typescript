import * as express from 'express'
import * as bodyParser from 'body-parser'

import { HomeRoute } from './app/route/home.route';
import { CompetitorRoute } from './app/route/competitor.route';
import { CompetitionRoute } from './app/route/competition.route';
import { TournamentRoute } from './app/route/tournament.route';

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
    const competitorRoute = new CompetitorRoute(this.express, router, 'api/competitors')
    const competitionRoute = new CompetitionRoute(this.express, router, 'api/competitions')
    const tournamentRoute = new TournamentRoute(this.express, router, 'api/tournaments')
  }
}

export default new App().express
