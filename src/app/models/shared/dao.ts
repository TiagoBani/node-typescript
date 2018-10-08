import { iPersistent } from "./iPersistent";
import { Connection } from "./connection";

export abstract class Dao implements iPersistent{
    
    protected db: Connection = new Connection()

    constructor(){ }

    public async select(data, callback){}
    public async insert(data, callback){}
    public async update(data, where, callback){}
    public async delete(data, callback){}
}