export class Competitor {
    protected _name: string
    protected _age: number
    protected _nascimento: Date
    
    constructor(protected _id?: number){
        this._id = _id ? _id: 0
    }
    public getId(): number {
        return this._id
    }
    public setId(_id: number): void {
        this._id = _id ? _id: 0
    }
    public getName(): string {
        return this._name
    }
    public setName(_name: string): void {
        this._name = _name ? _name : this._name
    }
    public getAge(): number {
        return this._age
    }
    public setAge(_age: number): void {
        this._age = _age ? _age : this._age
    }
    public getNascimento(): Date {
        return this._nascimento
    }
    public setNascimento(_nascimento: Date): void {
        this._nascimento = _nascimento ? _nascimento: this._nascimento
    }
}