import { Competidor } from './competidor';

export class Competicao {

    private _week: number
    private _name: string
    private _date: Date;
    private _winner: Competidor
    private _competitors: Competidor[]

    constructor(private _id?: number){
        this._id= _id? _id : 0
    }
    public getWeek(): number{
        return this._week
    }
    public setWeek(week: number): void{
        this._week = week? week : this._week
    }
    public getDate(): Date {
        return this._date;
    }
    public setDate(_date: Date): void {
        this._date = _date? _date : this._date;
    }
    public getName(): string {
        return this._name
    }
    public setName(_name: string): void {
        this._name = _name? _name : this._name;
    }
    public getWinner(): Competidor {
        return this._winner
    }
    public setWinner(_winner: Competidor): void {
        this._winner = _winner ? _winner : this._winner 
    }
    public getCompetitors(): Competidor[]{
        return this._competitors
    }
    public setCompetitors(_competitors: Competidor[]): void {
        this._competitors = _competitors ? _competitors : this._competitors
    }
}