import { iHttp } from '../shared/iHttp';
import { AbstractRoute } from './shared/abstract.route';
import { HomeController } from './../controllers/home.controller';

export class HomeRoute extends AbstractRoute {
    
    protected controller: any

    route(resource: string) {
        this.router.get(`${resource}`, (req, res) => {
            this.controller = new HomeController({ Request:req, Response:res })
            this.controller.home()
        })
    }
}