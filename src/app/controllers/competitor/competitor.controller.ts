import { iHttp } from "../../shared/iHttp";
import { iPersistent } from "../../models/shared/iPersistent";
import { CompetitorDAO } from '../../models/dao/competitor-dao.model';
import { AbstractController } from '../shared/abstract.controller';

export class CompetitorController extends AbstractController implements iPersistent{

    protected dao = new CompetitorDAO()
    protected obj: iHttp
    protected _winner: any
}