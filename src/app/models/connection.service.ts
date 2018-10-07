import * as mysql from 'mysql'

export class ConnectionService {

    public connection: any

    constructor(){ 
        this.connect()
    }    
    private connect() {
        this.connection = mysql.createConnection({ 
                host: 'localhost',
                user: 'root', 
                password: 'root',
                database: 'node_typescript' 
        })
    }
    public query(sql, params, cb){
        return this.connection.query(sql, params, cb)
    }
}