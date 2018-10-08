import { iPersistent } from './../shared/iPersistent';
import { Competition } from '../competition';
import { Dao } from '../shared/dao';

export class CompetitionDAO extends Dao implements iPersistent{

    public async select(id: string, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from competition ${where}`, id, cb)
    }
    public async insert(data: Competition, cb: any) {
        return this.db.query(`insert into competition set ?`, data, cb)
    }
    public async update(data: Competition, id:string, cb: any) {
        return this.db.query(`update competition set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:string, cb: any) {
        return this.db.query(`delete from competition where _id = ?`, data, cb)
    }
}