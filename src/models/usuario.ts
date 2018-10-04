export class Usuario {
    constructor(
        private _id ?: number,
        private _name ?: string,
        private _password ?: string
    ){
        this._id = _id ? _id: 0
        this._name = _name ? _name: null
        this._password = _password ? _password: null
    }
    public getId(): number{
        return this._id
    }
    public setId(_id: number): void{
        this._id = _id
    }
    public get_Name(): string{
        return this._name
    }
    public set_Name(_name: string): void {
        this._name = _name
    }
    public getPass(): string {
        return this._password
    }
    public setPass(_password: string): void{
        this._password = _password
    }
}