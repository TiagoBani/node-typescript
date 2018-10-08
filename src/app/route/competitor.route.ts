import { CompetitorDAO } from '../models/dao/competitor-dao';
import { AbstractCrudRoute } from './shared/abstract-crud.route';

export class CompetitorRoute extends AbstractCrudRoute {
    protected dao = new CompetitorDAO();
}