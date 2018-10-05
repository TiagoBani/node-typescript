import { Tournament } from './../models/tournament';
import { AbstractRoute } from "./abstract.route";

export class TournamentRoute extends AbstractRoute{
    private tournaments: Tournament[] = [];

    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.id != null){
            return {
                tournaments: this.tournaments.filter(e => e.getId() === obj.Request.params.id),
                message: 'Select with where'
            }
        }
        //todos os registros
        return {
            tournaments: this.tournaments,
            message: 'Select without where'
        }
    }
    post(obj:{Request, Response}) {
        const tournament = new Tournament(this.tournaments.length.toString())
        
        tournament.setName(obj.Request.body.nome)
        tournament.setDate(obj.Request.body.data)
        tournament.setWeek(obj.Request.body.semana)
        tournament.setWinner(obj.Request.body.vencedor)
        tournament.setCompetitors(obj.Request.body.competidores)
        tournament.setCompetitions(obj.Request.body.competicoes)

        this.tournaments.push(tournament)
        return {
            tournaments: this.tournaments,
            message: 'Insert requested'
        }
    }
    put(obj:{Request, Response}) {
        this.tournaments.forEach(e => {
            if(e.getId() === obj.Request.params.id){
                e.setName(obj.Request.body.nome)
                e.setDate(obj.Request.body.data)
                e.setWeek(obj.Request.body.semana)
                e.setWinner(obj.Request.body.vencedor)
                e.setCompetitors(obj.Request.body.competidores)
                e.setCompetitions(obj.Request.body.competicoes)
            }
        })
        return {
            tournaments:this.tournaments,
            message: 'Update requested'
        }
    }
    delete(obj:{Request, Response}) {
        this.tournaments = this.tournaments.filter(e => e.getId() === obj.Request.params.id)
        return {
            tournaments: this.tournaments,
            message: 'Delete requested'
        }
    }
}