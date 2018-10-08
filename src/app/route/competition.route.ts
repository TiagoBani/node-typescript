import { iHttp } from '../shared/iHttp';
import { iRoute } from './shared/iRoute.route';
import { Competition } from '../models/competition';
import { AbstractRoute } from './shared/abstract.route';
import { CompetitionDAO } from '../models/dao/competition-dao';

export class CompetitionRoute extends AbstractRoute implements iRoute{
    private dao = new CompetitionDAO();

    protected route(resource: string): void {
        this.router.all(`${resource}/:id?`, (req, res) => {
            console.log(`Resquested: ${resource} - Method: ${req.method}`)
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }

    get(obj:iHttp) {
        this.dao.select(obj.Request.params.id, (error, res: Competition[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Select requested with error'})

            obj.Response.status(200).json({tournaments: res,message: 'Select requested'})
        })
    }
    post(obj:iHttp) {
        obj = this.jsonToString(obj)
        this.dao.insert(obj.Request.body, (error, res: Competition[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Insert requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Insert requested'})
        })
    }
    put(obj:iHttp) {
        obj = this.jsonToString(obj)
        this.dao.update(obj.Request.body, obj.Request.params.id, (error, res: Competition[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Update requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Update requested'})
        })
    }
    delete(obj:iHttp) {
        this.dao.delete(obj.Request.params.id, (error, res: Competition[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Delete requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Delete requested'})
        })
    }
    private jsonToString(obj:iHttp){
        obj.Request.body._competitors = JSON.stringify(obj.Request.body._competitors);
        obj.Request.body._winner = JSON.stringify(obj.Request.body._winner);
        return obj;
    }
}