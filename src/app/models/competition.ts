import { Competitor } from './competitor';

export interface Competition {

    _id: number
    _week: number
    _name: string
    _date: string
    _result: string
    _winner: Competitor
    _competitors: Competitor[]
}