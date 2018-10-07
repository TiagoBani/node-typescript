import { ConnectionService } from './connection.service';
import { iCompetition } from './shared/iCompetition';

export class Competition {
    private db: ConnectionService = new ConnectionService()

    constructor(){ }

    public async select(id: string, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from competition ${where}`, id, cb)
    }
    public async insert(data: iCompetition, cb: any) {
        return this.db.query(`insert into competition set ?`, data, cb)
    }
    public async update(data: iCompetition, id:string, cb: any) {
        return this.db.query(`update competition set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:string, cb: any) {
        return this.db.query(`delete from competition where _id = ?`, data, cb)
    }
}