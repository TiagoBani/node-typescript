import { iHttp } from "../../shared/iHttp";
import { AbstractController } from '../shared/abstract.controller';
import { iPersistent } from "../../models/shared/iPersistent";
import { CompetitionCompetitorDAO } from "../../models/dao/competition/competition-competitor-dao.model";

export class CompetitionCompetitorController extends AbstractController implements iPersistent{

    protected dao = new CompetitionCompetitorDAO()
    protected obj: iHttp
    protected _winner: any

    protected validateValue: string = '_competitor'

    protected prepare(){
        this.obj.Request.params.id = Number(this.obj.Request.params.id)       
        if(this.obj.Request.body._competitors){
            this.data = []
            for (let index = 0; index < this.obj.Request.body._competitors.length; index++) {
                this.data.push({_competition: this.obj.Request.params.id,
                                _competitor: this.obj.Request.body._competitors[index]._id })
            }
        }
    }
    insert(){
        this.prepareInsert()
    }
    update(){
        this.sendReturn({ message: `Method PUT not implemented` })
    }
}