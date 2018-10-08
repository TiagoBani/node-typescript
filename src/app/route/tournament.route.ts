import { TournamentDAO } from '../models/dao/tournament-dao';
import { iHttp } from "../shared/iHttp";
import { AbstractCrudRoute } from "./shared/abstract-crud.route";

export class TournamentRoute extends AbstractCrudRoute{
    protected dao = new TournamentDAO();

    protected jsonToString(obj:iHttp){
        obj.Request.body._competitions = JSON.stringify(obj.Request.body._competitions);
        obj.Request.body._competitors = JSON.stringify(obj.Request.body._competitors);
        obj.Request.body._winner = JSON.stringify(obj.Request.body._winner);
        return obj;
    }
}