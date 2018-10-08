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
        const homeRoute = new HomeRoute(express, router, '/')
        const competitorRoute = new CompetitorRoute(express, router, '/api/competitors')
        const competitionRoute = new CompetitionRoute(express, router, '/api/competitions')
        const tournamentRoute = new TournamentRoute(express, router, '/api/tournaments')
    }
}