import { Competitor } from './competitor';
import { Competition } from './competition';

export interface Tournament {

    _id: number
    _name: string
    _week: number
    _date: string
    _winner: Competitor
    _competitors: Competitor[]
    _competitions: Competition[]
}