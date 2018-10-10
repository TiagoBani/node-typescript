import { iRoute } from './iRoute.route';
import { AbstractRoute } from "./abstract.route";
import { iHttp } from '../../shared/iHttp';

export abstract class AbstractCrudRoute extends AbstractRoute implements iRoute {

    protected controller: any

    protected route(resource: string): void {
        this.router.get(`${resource}/:id?`,async (req, res) => { 
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
    get(obj:iHttp) {
        this.controller.select()
    }
    post(obj:iHttp) {
        this.controller.insert()
    }
    put(obj:iHttp) {
        this.controller.update()
    }
    delete(obj:iHttp){
        this.controller.delete()
    }
}