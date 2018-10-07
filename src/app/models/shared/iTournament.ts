import { iCompetitor } from './iCompetitor';
import { iCompetition } from './iCompetition';

export interface iTournament {

    _id: string
    _name: string
    _week: number
    _date: string
    _winner: iCompetitor
    _competitors: iCompetitor[]
    _competitions: iCompetition[]
}