import { AbstractController } from "../shared/abstract.controller";
import { iPersistent } from "../../models/shared/iPersistent";
import { TournamentCompetitionDAO } from "../../models/dao/tournament/tournament-competition-dao.model";

export class TournamentCompetitionController extends AbstractController implements iPersistent{
    
    protected dao = new TournamentCompetitionDAO()
    protected validateValue: string = '_competition'

    protected prepare(){
        this.obj.Request.params.id = Number(this.obj.Request.params.id)       
        if(this.obj.Request.body._competitions){
            this.data = []
            for (let index = 0; index < this.obj.Request.body._competitions.length; index++) {
                this.data.push({_tournament: this.obj.Request.params.id,
                                         _competition: this.obj.Request.body._competitions[index]._id })
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