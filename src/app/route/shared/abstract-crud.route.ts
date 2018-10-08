import { iRoute } from './iRoute.route';
import { AbstractRoute } from "./abstract.route";
import { iHttp } from '../../shared/iHttp';

export abstract class AbstractCrudRoute extends AbstractRoute implements iRoute {

    protected dao: any

    protected route(resource: string): void {
        this.router.all(`${resource}/:id?`, async (req, res) => {
            console.log(`Resquested: ${resource} - Method: ${req.method}`)
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
    get(obj:iHttp) {
        this.dao.select(obj.Request.params.id, (error, res ) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Select requested with error'})

            obj.Response.status(200).json({tournaments: res,message: 'Select requested'})
        })
    }
    post(obj:iHttp) {
        obj = this.jsonToString(obj)

        this.dao.insert(obj.Request.body, (error, res ) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Insert requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Insert requested'})
        })
    }
    put(obj:iHttp) {
        obj = this.jsonToString(obj)

        this.dao.update(obj.Request.body, obj.Request.params.id, (error, res ) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Update requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Update requested'})
        })
    }
    delete(obj:iHttp) {
        this.dao.delete(obj.Request.params.id, (error, res) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Delete requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Delete requested'})
        })
    }
    protected jsonToString(obj){
        return obj
    }
}