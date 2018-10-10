import { iHttp } from "../shared/iHttp";
import { AbstractCrudRoute } from "./shared/abstract-crud.route";
import { tournamentRules } from '../rules/tournament.rules';
import { TournamentController } from "../controllers/tournament/tournament.controller";
import { TournamentCompetitorController } from "../controllers/tournament/tournament-competitor.controller";
import { TournamentCompetitionController } from "../controllers/tournament/tournament-competition.controller";

export class TournamentRoute extends AbstractCrudRoute{
    protected controller: any

    protected route(resource: string): void {
        this.router.all(`${resource}/:id/competitors/`, async (req, res) => { 
            this.controller = new TournamentCompetitorController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
        this.router.all(`${resource}/:id/competitions/`, async (req, res) => { 
            this.controller = new TournamentCompetitionController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
        this.router.all(`${resource}/:id?`, tournamentRules['forRegister'], async (req, res) => { 
            this.controller = new TournamentController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
    delete(obj:iHttp) {
        if(Array.isArray(obj.Request.body._competitions) || Array.isArray(obj.Request.body._competitors)){
            this.controller.deleteAll()
        }else{
            this.controller.delete()
        }
    }
}