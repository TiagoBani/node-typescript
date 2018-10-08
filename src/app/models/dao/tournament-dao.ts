import { iPersistent } from './../shared/iPersistent';
import { Tournament } from '../tournament';
import { Dao } from '../shared/dao';

export class TournamentDAO extends Dao implements iPersistent{

    public async select(id: number, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from tournament ${where}`, id, cb)
    }
    public async insert(data: Tournament, cb: any) {
        return this.db.query(`insert into tournament set ?`, data, cb)
    }
    public async update(data: Tournament, id:number, cb: any) {
        return this.db.query(`update tournament set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:number, cb: any) {
        return this.db.query(`delete from tournament where _id = ?`, data, cb)
    }
}