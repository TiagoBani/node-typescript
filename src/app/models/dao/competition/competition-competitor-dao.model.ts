import { Dao } from "../../shared/dao";
import { iPersistent } from "../../shared/iPersistent";
import { CompetitionCompetitor } from './../../competition-competitor';

export class CompetitionCompetitorDAO extends Dao implements iPersistent{

    public async select( data: number, cb: any ){
        const where = data >= 0?` where _competition = ? `:``
        return this.db.query(`select * from competition_competitor ${where}`, data, cb)
    }
    public async insert(data: CompetitionCompetitor[], cb: any){
        const batch = this.prepare(data)
        return this.db.query(`insert into competition_competitor (_competitor, _competition ) values ? `, [batch], cb)
    }
    public async delete(data: number, cb: any){
        return this.db.query(`delete from competition_competitor where _competition = ?`, data, cb)
    }
    public async deleteAll(data: CompetitionCompetitor, cb: any){
        const batch = this.prepare(data)
        return this.db.query(`delete from competition_competitor where (_competitor,_competition) in(?)`, [batch], cb)
    }
    private prepare(data){
        const batch = []
        for (let i = 0; i < data.length; i++) {
            batch.push([data[i]._competitor, data[i]._competition])            
        }
        return batch
    }
}