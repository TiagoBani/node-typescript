import { Competitor } from './competitor';
import { Competition } from './competition';

export class Tournament {

    private _name: string
    private _week: number
    private _date: Date
    private _winner: Competitor
    private _competitors: Competitor[]
    private _competitions: Competition[]

    constructor(private _id?: string){
        this._id = _id? _id : '0'
    }
    public getId(): string {
        return this._id;
    }
    public setId(_id: string): void {
        this._id = _id ? _id : this._id
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
    public getWinner(): Competitor {
        return this._winner
    }
    public setWinner(_winner: Competitor): void {
        this._winner = _winner ? _winner : this._winner 
    }
    public getCompetitors(): Competitor[]{
        return this._competitors
    }
    public setCompetitors(_competitors: Competitor[]): void {
        this._competitors = _competitors ? _competitors : this._competitors
    }
    public getCompetitions(): Competition[] {
        return this._competitions
    }
    public setCompetitions(_competitions: Competition[]): void {
        this._competitions = _competitions ? _competitions : this._competitions
    }
}