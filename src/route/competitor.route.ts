import { AbstractRoute } from './abstract.route';
import { Competitor } from '../models/competitor';

export class CompetitorRoute extends AbstractRoute {
    private competitors:Competitor[] = []
    route(){
        this.router.all('/competitors/:id?', (req, res) => {
            const response = this.responseJson({ Request:req, Response:res }, req.method)
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use('/competitors', this.router)
    }

    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.id != null){
            return {
                competitors: this.competitors.filter(e => e.getId() === Number.parseInt(obj.Request.params.id)),
                message: 'Select with where'
            }
        }
        //todos os registros
        return {
            competitors: this.competitors,
            message: 'Select without where'
        }
    }
    post(obj:{Request, Response}) {
        const competitor = new Competitor(this.competitors.length)
        
        competitor.setName(obj.Request.body.nome)
        competitor.setAge(obj.Request.body.idade)
        competitor.setNascimento(obj.Request.body.nascimento)

        this.competitors.push(competitor)
        return {
            competitors: this.competitors,
            message: 'Insert requested'
        }
    }
    put(obj:{Request, Response}) {
        this.competitors.forEach(e => {
            if(e.getId() === Number.parseInt(obj.Request.params.id)){
                e.setName(obj.Request.body.nome)
                e.setAge(obj.Request.body.idade)
                e.setNascimento(obj.Request.body.nascimento)
            }
        })
        return {
            competitors:this.competitors,
            message: 'Update requested'
        }
    }
    delete(obj:{Request, Response}) {
        this.competitors = this.competitors.filter(e => e.getId() === Number.parseInt(obj.Request.params.id))
        return {
            competitors: this.competitors,
            message: 'Delete requested'
        }
    }
}