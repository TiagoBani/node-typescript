import { ConnectionService } from '../shared/connection.service';
import { Competition } from '../competition';

export class CompetitionDAO {
    private db: ConnectionService = new ConnectionService()

    constructor(){ }

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