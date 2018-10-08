import { validationResult } from 'express-validator/check';

import { iHttp } from '../shared/iHttp';
import { AbstractCrudRoute } from './shared/abstract-crud.route';
import { competitionRules } from '../rules/competition.rules';
import { CompetitionDAO } from '../models/dao/competition-dao';

export class CompetitionRoute extends AbstractCrudRoute{
    protected dao = new CompetitionDAO();

    protected route(resource: string): void {
        this.router.all(`${resource}/:id?`, competitionRules['forRegister'], async (req, res) => { 
            if( ['GET','DELETE'].indexOf(req.method) < 0 ){
                if(!validationResult(req).isEmpty())
                    return this.validate({ Request:req, Response:res })
            }
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }

    protected jsonToString(obj:iHttp){
        obj.Request.body._competitors = JSON.stringify(obj.Request.body._competitors);
        obj.Request.body._winner = JSON.stringify(obj.Request.body._winner);
        return obj;
    }
}