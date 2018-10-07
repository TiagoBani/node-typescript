import { ConnectionService } from './connection.service';
import { iCompetitor } from './shared/iCompetitor';

export class Competitor {
    private db: ConnectionService = new ConnectionService()

    constructor(){ }

    public async select(id: string, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from competitor ${where}`, id, cb)
    }
    public async insert(data: iCompetitor, cb: any) {
        return this.db.query(`insert into competitor set ?`, data, cb)
    }
    public async update(data: iCompetitor, id:string, cb: any) {
        return this.db.query(`update competitor set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:string, cb: any) {
        return this.db.query(`delete from competitor where _id = ?`, data, cb)
    }
}