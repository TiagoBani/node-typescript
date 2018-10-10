import { iHttp } from '../shared/iHttp';
import { AbstractCrudRoute } from './shared/abstract-crud.route';
import { CompetitionController } from './../controllers/competition/competition.controller';
import { competitionRules } from '../rules/competition.rules';

export class CompetitionRoute extends AbstractCrudRoute{
    protected controller: any

    protected route(resource: string): void {
        this.router.all(`${resource}/:id/competitors/`, async (req, res) => { 
            this.controller = new CompetitionController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
        this.router.all(`${resource}/:id?`, competitionRules['forRegister'], async (req, res) => { 
            this.controller = new CompetitionController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
    delete(obj:iHttp) {
        if(Array.isArray(obj.Request.body._competitors)){
            this.controller.deleteAll()
        }else{
            this.controller.delete()
        }
    }
}