import { iHttp } from '../shared/iHttp';
import { CompetitionDAO } from '../models/dao/competition-dao';
import { AbstractCrudRoute } from './shared/abstract-crud.route';

export class CompetitionRoute extends AbstractCrudRoute{
    protected dao = new CompetitionDAO();

    protected jsonToString(obj:iHttp){
        obj.Request.body._competitors = JSON.stringify(obj.Request.body._competitors);
        obj.Request.body._winner = JSON.stringify(obj.Request.body._winner);
        return obj;
    }
}