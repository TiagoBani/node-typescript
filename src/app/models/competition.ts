import { Competitor } from './competitor';

export interface Competition {

    _id: string
    _week: number
    _name: string
    _date: string
    _result: string
    _winner: Competitor
    _competitors: Competitor[]
}