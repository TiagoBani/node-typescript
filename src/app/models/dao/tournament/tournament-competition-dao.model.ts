import { Dao } from "../../shared/dao";
import { iPersistent } from "../../shared/iPersistent";
import { TournamentCompetition } from "../../tournament-competition";

export class TournamentCompetitionDAO extends Dao implements iPersistent{

    public async select( data: number, cb: any ){
        const where = data >= 0?` where _tournament = ? `:``
        return this.db.query(`select * from tournament_competition ${where}`, data, cb)
    }
    public async insert(data: TournamentCompetition[], cb: any){
        const batch = this.prepare(data)
        return this.db.query(`insert into tournament_competition (_tournament, _competition ) values ? `, [batch], cb)
    }
    public async delete(data: number, cb: any){
        return this.db.query(`delete from tournament_competition where _tournament = ?`, data, cb)
    }
    public async deleteAll(data: TournamentCompetition, cb: any){
        const batch = this.prepare(data)
        return this.db.query(`delete from tournament_competition where (_tournament,_competition) in(?)`, [batch], cb)
    }
    private prepare(data){
        const batch = []
        for (let i = 0; i < data.length; i++) {
            batch.push([data[i]._tournament, data[i]._competition])            
        }
        return batch
    }
}