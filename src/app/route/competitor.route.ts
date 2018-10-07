import { AbstractRoute } from './shared/abstract.route';
import { Competitor } from './../models/competitor';
import { iCompetitor } from '../models/shared/iCompetitor';

export class CompetitorRoute extends AbstractRoute {
    private dao = new Competitor();

    protected route(resource: string): void {
        this.router.all(`/${resource}/:id?`, (req, res) => {
            console.log(`Resquested: ${resource} - Method: ${req.method}`)
            this.responseJson({ Request:req, Response:res }, req.method)
        })
    }
    get(obj:{Request, Response}) {
        this.dao.select(obj.Request.params.id, (error, res: iCompetitor[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Select requested with error'})

            obj.Response.status(200).json({tournaments: res,message: 'Select requested'})
        })
    }
    post(obj:{Request, Response}) {
        this.dao.insert(obj.Request.body, (error, res: iCompetitor[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Insert requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Insert requested'})
        })
    }
    put(obj:{Request, Response}) {
        this.dao.update(obj.Request.body, obj.Request.params.id, (error, res: iCompetitor[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Update requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Update requested'})
        })
    }
    delete(obj:{Request, Response}) {
        this.dao.delete(obj.Request.params.id, (error, res: iCompetitor[]) => {
            if(error)
                obj.Response.status(500).json({error: error, message: 'Delete requested with error'})

            obj.Response.status(200).json({tournaments: res['affectedRows'], message: 'Delete requested'})
        })
    }
}