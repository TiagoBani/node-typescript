import { Competition } from '../models/competition';
import { AbstractRoute } from './abstract.route';

export class CompetitionRoute extends AbstractRoute{
    private competitions: Competition[] = [];

    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.id != null){
            return {
                competitions: this.competitions.filter(e => e.getId() === obj.Request.params.id),
                message: 'Select with where'
            }
        }
        //todos os registros
        return {
            competitions: this.competitions,
            message: 'Select without where'
        }
    }
    post(obj:{Request, Response}) {
        const competition = new Competition(this.competitions.length.toString())
        
        competition.setName(obj.Request.body.nome)
        competition.setDate(obj.Request.body.data)
        competition.setWeek(obj.Request.body.semana)
        competition.setWinner(obj.Request.body.vencedor)
        competition.setCompetitors(obj.Request.body.competidores)

        this.competitions.push(competition)
        return {
            competitions: this.competitions,
            message: 'Insert requested'
        }
    }
    put(obj:{Request, Response}) {
        this.competitions.forEach(e => {
            if(e.getId() === obj.Request.params.id){
                e.setName(obj.Request.body.nome)
                e.setDate(obj.Request.body.data)
                e.setWeek(obj.Request.body.semana)
                e.setWinner(obj.Request.body.vencedor)
                e.setCompetitors(obj.Request.body.competidores)
            }
        })
        return {
            competitions:this.competitions,
            message: 'Update requested'
        }
    }
    delete(obj:{Request, Response}) {
        this.competitions = this.competitions.filter(e => e.getId() === obj.Request.params.id)
        return {
            competitions: this.competitions,
            message: 'Delete requested'
        }
    }
}