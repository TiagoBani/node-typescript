import { AbstractCrudRoute } from './shared/abstract-crud.route';
import { competitorRules } from '../rules/competitor.rules';
import { CompetitorController } from './../controllers/competitor/competitor.controller';

export class CompetitorRoute extends AbstractCrudRoute {
    protected controller: any

    protected route(resource: string): void {
        this.router.all(`${resource}/:id?`, competitorRules['forRegister'], async (req, res) => { 
            this.controller = new CompetitorController({ Request:req, Response:res })
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
}