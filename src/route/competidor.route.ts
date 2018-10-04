import { AbstractRoute } from './abstract.route';
import { Competidor } from '../models/competidor';

export class CompetidorRoute extends AbstractRoute {
    private competidores:Competidor[] = []
    route(){
        this.router.all('/competidor/:id?', (req, res) => {
            const response = this.responseJson({ Request:req, Response:res }, req.method)
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use('/competidor', this.router)
    }

    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.id != null){
            return {
                competidores: this.competidores.filter(e => e.getId() === Number.parseInt(obj.Request.params.id)),
                message: 'Select com where'
            }
        }
        //todos os registros
        return {
            competidores: this.competidores,
            message: 'Select sem where'
        }
    }
    post(obj:{Request, Response}) {
        const competidor = new Competidor(this.competidores.length)
        
        competidor.setName(obj.Request.body.nome)
        competidor.setIdade(obj.Request.body.idade)
        competidor.setNascimento(obj.Request.body.nascimento)

        this.competidores.push(competidor)
        return {
            competidores: this.competidores,
            message: 'Insert requisitado'
        }
    }
    put(obj:{Request, Response}) {
        this.competidores.forEach(e => {
            if(e.getId() === Number.parseInt(obj.Request.params.id)){
                e.setName(obj.Request.body.nome)
                e.setIdade(obj.Request.body.idade)
                e.setNascimento(obj.Request.body.nascimento)
            }
        })
        return {
            competidores:this.competidores,
            message: 'Update requisitado'
        }
    }
    delete(obj:{Request, Response}) {
        this.competidores = this.competidores.filter(e => e.getId() === Number.parseInt(obj.Request.params.id))
        return {
            competidores: this.competidores,
            message: 'Delete requisitado'
        }
    }
}