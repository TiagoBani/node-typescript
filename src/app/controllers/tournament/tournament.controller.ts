import { iPersistent } from "../../models/shared/iPersistent";
import { TournamentDAO } from "../../models/dao/tournament/tournament-dao.model";
import { iHttp } from "../../shared/iHttp";
import { AbstractController } from '../shared/abstract.controller';

export class TournamentController extends AbstractController implements iPersistent{

    protected dao = new TournamentDAO()
    protected obj: iHttp
    protected _winner: any

    protected prepare(){
        
        this._winner = this.obj.Request.body._winner
        delete this.obj.Request.body._winner

        this.obj.Request.body._winner = this._winner ? this._winner._id : null
        this.data = this.obj.Request.body
    }
}