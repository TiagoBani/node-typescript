import { iPersistent } from "../../models/shared/iPersistent";
import { AbstractController } from "../shared/abstract.controller";
import { TournamentCompetitorDAO } from './../../models/dao/tournament/tournament-competitor-dao.model';

export class TournamentCompetitorController extends AbstractController implements iPersistent{
    
    protected dao = new TournamentCompetitorDAO()
    protected validateValue: string = '_competitor'

    protected prepare(){
        this.obj.Request.params.id = Number(this.obj.Request.params.id)       
        if(this.obj.Request.body._competitors){
            this.data = []
            for (let index = 0; index < this.obj.Request.body._competitors.length; index++) {
                this.data.push({_tournament: this.obj.Request.params.id,
                                _competitor: this.obj.Request.body._competitors[index]._id })
            }
        }
    }
    insert(){
        this.prepareInsert()
    }
    update(){
        this.sendReturn({ message: `Method PUT not implemented` },404 )
    }
}