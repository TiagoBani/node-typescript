import { ConnectionService } from './connection.service';
import { iTournament } from './shared/iTournament';

export class Tournament {
    private db: ConnectionService = new ConnectionService()

    constructor(){ }

    public async select(id: string, cb: any) {
        const where = id != null?` where _id = ? `:``
        return this.db.query(`select * from tournament ${where}`, id, cb)
    }
    public async insert(data: iTournament, cb: any) {
        return this.db.query(`insert into tournament set ?`, data, cb)
    }
    public async update(data: iTournament, id:string, cb: any) {
        return this.db.query(`update tournament set ? where _id = '${id}'`, data, cb)
    }
    public async delete(data:string, cb: any) {
        return this.db.query(`delete from tournament where _id = ?`, data, cb)
    }
}