import { iHttp } from "../../shared/iHttp";
import { AbstractController } from '../shared/abstract.controller';
import { iPersistent } from "../../models/shared/iPersistent";
import { CompetitionDAO } from "../../models/dao/competition-dao.model";

export class CompetitionController extends AbstractController implements iPersistent{

    protected dao = new CompetitionDAO()
    protected obj: iHttp
    protected _winner: any

    protected prepare(){
        
        this._winner = this.obj.Request.body._winner
        delete this.obj.Request.body._winner

        this.obj.Request.body._winner = this._winner ? this._winner._id : null
        this.data = this.obj.Request.body
    }
}