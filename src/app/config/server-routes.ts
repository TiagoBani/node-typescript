import * as express from 'express'

import { HomeRoute } from "../route/home.route";
import { CompetitorRoute } from "../route/competitor.route";
import { CompetitionRoute } from "../route/competition.route";
import { TournamentRoute } from "../route/tournament.route";

export class serverRoutes {

    constructor(
        private express: express, 
        private router: express.Router
    ){ 
        this.home()
        this.competitor()
        this.tournament()
        this.competition()

        this.express.use('/', router)
    }
    private home(){
        const homeRoute = new HomeRoute(this.express, this.router, '/')
    }
    private competitor(){
        const competitorRoute = new CompetitorRoute(this.express, this.router, '/api/competitors')
    }
    private competition(){
        const competitionRoute = new CompetitionRoute(this.express, this.router, '/api/competitions')
    }
    private tournament(){
        const tournamentRoute = new TournamentRoute(this.express, this.router, '/api/tournaments')
    }
}