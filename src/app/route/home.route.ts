import { AbstractRoute } from './shared/abstract.route';
import { iHttp } from '../shared/iHttp';

export class HomeRoute extends AbstractRoute {
    
    route() {
        this.router.all('/', (req, res) => {
            console.log(`Resquested: / - Method: ${req.method}`)
            const response = this.responseJson({ Request:req, Response:res }, req.method)
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use('/', this.router)
    }
    get(obj:iHttp) {
        return { message: 'Welcome' }
    }
}