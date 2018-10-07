import { iCompetitor } from './iCompetitor';

export interface iCompetition {

    _id: string
    _week: number
    _name: string
    _date: string
    _winner: iCompetitor
    _competitors: iCompetitor[]
}