import * as mysql from 'mysql'

import { DB } from '../../config/db';

export class Connection {

    public connection: any

    constructor(){ 
        this.connect()
    }    
    private connect() {
        this.connection = mysql.createConnection({ 
                host: DB.host,
                user: DB.user, 
                password: DB.password,
                database: DB.database 
        })
    }
    public query(sql, params, cb){
        return this.connection.query(sql, params, cb)
    }
}