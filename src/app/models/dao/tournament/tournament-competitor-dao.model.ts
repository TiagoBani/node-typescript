import { Dao } from "../../shared/dao";
import { iPersistent } from "../../shared/iPersistent";
import { TournamentCompetitor } from './../../tournament-competitor';

export class TournamentCompetitorDAO extends Dao implements iPersistent{

    public async select( data: number, cb: any ){
        const where = data >= 0 ?` where _tournament = ? `:``
        return this.db.query(`select * from tournament_competitor ${where}`, data, cb)
    }
    public async insert(data: TournamentCompetitor[], cb: any){
        const batch = this.prepare(data)
        return this.db.query(`insert into tournament_competitor (_tournament, _competitor ) values ? `, [batch], cb)
    }
    public async delete(data: number, cb: any){
        return this.db.query(`delete from tournament_competitor where _tournament = ?`, data, cb)
    }
    public async deleteAll(data: TournamentCompetitor, cb: any){
        const batch = this.prepare(data)
        return this.db.query(`delete from tournament_competitor where (_tournament,_competitor) in(?)`, [batch], cb)
    }
    private prepare(data){
        const batch = []
        for (let i = 0; i < data.length; i++) {
            batch.push([data[i]._tournament, data[i]._competitor])            
        }
        return batch
    }
}