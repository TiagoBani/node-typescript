import { validationResult } from 'express-validator/check'

import { AbstractCrudRoute } from './shared/abstract-crud.route';
import { competitorRules } from '../rules/competitor.rules';
import { CompetitorDAO } from '../models/dao/competitor-dao';

export class CompetitorRoute extends AbstractCrudRoute {
    protected dao = new CompetitorDAO();

    protected route(resource: string): void {
        this.router.all(`${resource}/:id?`, competitorRules['forRegister'], async (req, res) => { 
            if( ['GET','DELETE'].indexOf(req.method) < 0 ){
                if(!validationResult(req).isEmpty())
                    return this.validate({ Request:req, Response:res })
            }
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
}