import { Tournament } from '../../tournament';
import { Dao } from '../../shared/dao';
import { iPersistent } from '../../shared/iPersistent';

export class TournamentDAO extends Dao implements iPersistent{

    public async select(id: number, cb: any) {
        const where = id >= 0 ?` where _id = ? `:``
        return this.db.query(`select * from tournament ${where}`, id, cb)
    }
    public async insert(data: Tournament, cb: any) {
        console.log(data)
        return this.db.query(`insert into tournament set ?`, data, cb)
    }
    public async update(data: Tournament, id:number, cb: any) {
        return this.db.query(`update tournament set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:number, cb: any) {
        return this.db.query(`delete from tournament where _id = ?`, data, cb)
    }
}