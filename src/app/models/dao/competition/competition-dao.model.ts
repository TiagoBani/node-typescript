import { Dao } from "../../shared/dao";
import { iPersistent } from "../../shared/iPersistent";
import { Competition } from "../../competition";

export class CompetitionDAO extends Dao implements iPersistent{

    public async select(id: number, cb: any) {
        const where = id >= 0 ?` where _id = ? `:``
        return this.db.query(`select * from competition ${where}`, id, cb)
    }
    public async insert(data: Competition, cb: any) {
        return this.db.query(`insert into competition set ?`, data, cb)
    }
    public async update(data: Competition, id:number, cb: any) {
        return this.db.query(`update competition set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:number, cb: any) {
        return this.db.query(`delete from competition where _id = ?`, data, cb)
    }
}