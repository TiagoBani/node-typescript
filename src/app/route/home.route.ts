import { AbstractRoute } from './shared/abstract.route';
import { iHttp } from '../shared/iHttp';

export class HomeRoute extends AbstractRoute {
    
    route(resource: string) {
        this.router.all(`${resource}`, (req, res) => {
            console.log(`Resquested: ${resource} - Method: ${req.method}`)
            const response = this.responseJson({ Request:req, Response:res }, req.method)
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use(`${resource}`, this.router)
    }
    get(obj:iHttp) {
        return { message: 'Welcome' }
    }
}