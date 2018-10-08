import { iPersistent } from './../shared/iPersistent';
import { Competitor } from '../competitor';
import { Dao } from '../shared/dao';

export class CompetitorDAO extends Dao implements iPersistent{

    public async select(id: string, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from competitor ${where}`, id, cb)
    }
    public async insert(data: Competitor, cb: any) {
        return this.db.query(`insert into competitor set ?`, data, cb)
    }
    public async update(data: Competitor, id:string, cb: any) {
        return this.db.query(`update competitor set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:string, cb: any) {
        return this.db.query(`delete from competitor where _id = ?`, data, cb)
    }
}